// Tactile Button — Originkit
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAnimate, useReducedMotion } from "motion/react";

const radiusFromPercent = (w, h, pct) =>
  (Math.min(w, h) / 2) * (Math.max(0, Math.min(100, pct)) / 100);

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PRESS_DOWN = {
  type: "tween",
  ease: "easeOut",
  duration: 0.05,
};

const DEFAULT_TRANSITION = {
  mass: 1,
  type: "spring",
  delay: 0,
  damping: 60,
  stiffness: 800,
};

const DEFAULT_ICON = {
  side: "left",
  size: 24,
  type: "symbol",
  color: "#FFFFFF",
  image: "",
  symbol: "→",
  padding: 0,
  rounded: 0,
  hoverColor: "#FFFFFF",
};

const DEFAULT_BASE = { color: "#FC731C", offsetX: -1, offsetY: 11 };

export default function TactileButton(props) {
  const {
    label = "TACTILE BUTTON",
    font,
    showText = true,
    padding = "40px 64px 40px 64px",
    rounded = 100,
    fill: fillProp,
    textColor: textColorProp,
    colors,
    addIcon = false,
    icon = DEFAULT_ICON,
    gap = 12,
    border,
    hover = {},
    base = DEFAULT_BASE,
    link,
    transition = DEFAULT_TRANSITION,
    newTab = false,
    style,
    onClick,
    type = "button",
  } = props;

  const fill = colors?.fill ?? fillProp ?? "#6366F1";
  const textColor = colors?.textColor ?? textColorProp ?? "#FFFFFF";
  const {
    fill: hoverFill = colors?.hoverFill ?? "#FC731C",
    textColor: hoverTextColor = colors?.hoverTextColor ?? "#FFFFFF",
  } = hover;

  const {
    color: baseColor = "#3730A3",
    offsetX: baseOffsetX,
    offsetY: baseOffsetY,
    side: baseSide = "right",
    depth: baseDepth = 7,
  } = base;

  const [scope, animate] = useAnimate();

  const [radiusBox, setRadiusBox] = useState({ w: 0, h: 0 });
  useIsoLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;
    const read = () =>
      setRadiusBox((prev) =>
        prev.w === el.offsetWidth && prev.h === el.offsetHeight
          ? prev
          : { w: el.offsetWidth, h: el.offsetHeight }
      );
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [scope]);
  const radiusPx = radiusFromPercent(radiusBox.w, radiusBox.h, rounded);

  const capRef = useRef(null);

  const iconRef = useRef(null);
  const hovered = useRef(false);
  const pressed = useRef(false);
  const reducedMotion = useReducedMotion();

  const fontStyles = font ?? {};

  const legacyDepth = Math.max(0, Math.round(baseDepth));
  const dx = Math.round(
    baseOffsetX ?? (baseSide === "left" ? -legacyDepth : legacyDepth)
  );
  const dy = Math.round(baseOffsetY ?? legacyDepth);

  const {
    type: iconKind = "symbol",
    symbol: iconSymbol = "→",
    image,
    color: iconColor = "#FFFFFF",
    hoverColor: iconHoverColor = "#FFFFFF",
    side: iconSide = "left",
    size: iconSize = 24,
    padding: iconPaddingProp = 0,
    rounded: iconRounded = 0,
  } = icon;

  const iconSrc =
    typeof image === "string" ? image : image && image.src ? image.src : "";

  const iconMode = iconKind === "image" && iconSrc ? "image" : "symbol";
  const iconPx = Math.max(1, Math.round(iconSize));

  const iconPadPx = Math.max(0, Math.round(iconPaddingProp));

  const iconRadius = radiusFromPercent(iconPx, iconPx, iconRounded);
  const gapPx = Math.max(0, Math.round(gap));

  const iconEl = !addIcon ? null : iconMode === "image" ? (
    <img
      src={iconSrc}
      alt=""
      aria-hidden
      draggable={false}
      style={{
        width: iconPx,
        height: iconPx,
        margin: iconPadPx,
        objectFit: iconRadius > 0 ? "cover" : "contain",
        borderRadius: Math.min(iconRadius, iconPx / 2),
        display: "block",
        flex: "none",
        pointerEvents: "none",
      }}
    />
  ) : (
    <span
      ref={iconRef}
      aria-hidden
      style={{
        fontSize: iconPx,
        margin: iconPadPx,
        lineHeight: 1,
        color: iconColor,
        flex: "none",
        pointerEvents: "none",
      }}
    >
      {iconSymbol}
    </span>
  );

  const paint = useCallback(
    (toHover, instant) => {
      const el = capRef.current;
      if (!el) return;
      const t = instant || reducedMotion ? { duration: 0 } : transition;
      animate(
        el,
        toHover
          ? { backgroundColor: hoverFill, color: hoverTextColor }
          : { backgroundColor: fill, color: textColor },
        t
      );
      if (iconRef.current)
        animate(
          iconRef.current,
          { color: toHover ? iconHoverColor : iconColor },
          t
        );
    },
    [
      animate,
      transition,
      reducedMotion,
      fill,
      hoverFill,
      textColor,
      hoverTextColor,
      iconColor,
      iconHoverColor,
    ]
  );

  const press = useCallback(
    (down, instant) => {
      const el = capRef.current;
      if (!el) return;
      const t = instant
        ? { duration: 0 }
        : reducedMotion
        ? { duration: 0 }
        : down
        ? PRESS_DOWN
        : transition;
      animate(el, { x: down ? dx : 0, y: down ? dy : 0 }, t);
    },
    [animate, transition, reducedMotion, dx, dy]
  );

  useEffect(() => {
    paint(hovered.current, true);
  }, [paint]);

  useEffect(() => {
    press(pressed.current, true);
  }, [press]);

  const onEnter = () => {
    hovered.current = true;
    paint(true, false);
  };
  const onLeave = () => {
    hovered.current = false;
    paint(false, false);

    if (pressed.current) {
      pressed.current = false;
      press(false, false);
    }
  };

  const onDown = () => {
    pressed.current = true;
    press(true, false);
  };
  const onUp = () => {
    pressed.current = false;
    press(false, false);
  };

  useEffect(() => {
    const release = () => {
      if (!pressed.current) return;
      pressed.current = false;
      press(false, false);
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    return () => {
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, [press]);

  const isLink = typeof link === "string" && link.length > 0;
  const Tag = isLink ? "a" : "button";
  const tagProps = {
    "aria-label": showText ? undefined : label || undefined,
    onClick,
    ...(isLink
      ? {
          href: link,
          target: newTab ? "_blank" : undefined,
          rel: newTab ? "noopener noreferrer" : undefined,
        }
      : { type }),
  };

  return (
    <div
      style={{
        display: "inline-block",
        boxSizing: "border-box",
        paddingTop: Math.max(0, -dy),
        paddingBottom: Math.max(0, dy),
        paddingLeft: Math.max(0, -dx),
        paddingRight: Math.max(0, dx),
        ...style,
      }}
    >
      <div
        ref={scope}
        style={{
          position: "relative",
          display: "inline-flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            transform: `translate(${dx}px, ${dy}px)`,
            borderRadius: radiusPx,
            ...(border ?? {}),
            backgroundColor: baseColor,
            boxSizing: "border-box",
            pointerEvents: "none",
          }}
        />

        <Tag
          {...tagProps}
          ref={capRef}
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
          onPointerDown={onDown}
          onPointerUp={onUp}
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            padding,
            borderRadius: radiusPx,
            border: "none",
            fontFamily: "inherit",
            ...(border ?? {}),
            backgroundColor: fill,
            textDecoration: "none",
            cursor: "pointer",
            boxSizing: "border-box",
            userSelect: "none",
            whiteSpace: "nowrap",
            textAlign: "center",
            WebkitTapHighlightColor: "transparent",
            ...fontStyles,
            color: textColor,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: iconEl && showText ? gapPx : 0,
              flexDirection: iconSide === "right" ? "row-reverse" : "row",
            }}
          >
            {iconEl}
            {showText && <span>{label}</span>}
          </span>
        </Tag>
      </div>
    </div>
  );
}
