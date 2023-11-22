import PropTypes from "prop-types";
import React from "react";

export const Button = ({
    type,
    type2,
    type3,
    style,
    state,
    theme,
    component,
    className,
    autoLayoutClassName,
    text = "Button",
}) => {
    return (
        <div
            className={`items-center justify-center relative ${
                type2 === "social" || (theme === "dark" && type2 === "icon") || (theme === "light" && type2 === "icon")
                    ? "border border-solid"
                    : ""
            } ${
                theme === "light" && type === "login"
                    ? "border-greyscale-200"
                    : theme === "dark" && ["icon", "social"].includes(type2)
                    ? "border-darkdark-3"
                    : type2 === "icon" && theme === "light"
                    ? "border-greyscale-300"
                    : ""
            } ${["primary", "secondary", "social"].includes(type2) ? "w-[380px]" : ""} ${
                type2 === "icon" ? "inline-flex" : "flex"
            } ${state === "default" ? "flex-col" : ""} ${type2 === "icon" ? "gap-[8px]" : "gap-[10px]"} ${
                ["primary", "secondary"].includes(type2)
                    ? "px-[16px] py-[18px]"
                    : type === "login"
                    ? "px-[32px] py-[18px]"
                    : type2 === "icon"
                    ? "p-[9px]"
                    : ""
            } ${type2 === "icon" ? "overflow-hidden" : ""} ${
                ["primary", "rounded"].includes(type3) ? "rounded-[100px]" : "rounded-[16px]"
            } ${
                theme === "default" && ["active", "default"].includes(state)
                    ? "bg-primary-500"
                    : state === "disabled"
                    ? "bg-alerts-statusbutton-disabled"
                    : theme === "light" && type2 === "secondary"
                    ? "bg-primary-100"
                    : state === "active" && theme === "dark"
                    ? "bg-darkdark-3"
                    : theme === "light" && ["icon", "social"].includes(type2)
                    ? "bg-others-white"
                    : theme === "dark" && ["icon", "social"].includes(type2)
                    ? "bg-darkdark-2"
                    : ""
            } ${className}`}
        >
            {["primary", "secondary", "social"].includes(type2) && (
                <div
                    className={`relative ${style === "icon" ? "flex" : state === "default" ? "inline-flex" : ""} ${
                        style === "default" && ["primary", "secondary"].includes(type2) ? "mt-[-1.00px]" : ""
                    } ${
                        style === "default" && ["primary", "secondary"].includes(type2)
                            ? "[font-style:var(--body-large-bold-font-style)]"
                            : ""
                    } ${style === "icon" || type2 === "social" ? "items-center" : ""} ${
                        type === "button" ? "flex-1" : state === "default" ? "flex-[0_0_auto]" : ""
                    } ${
                        style === "default" && ["default", "dark"].includes(theme) && (theme === "default" || type2 === "secondary")
                            ? "text-others-white"
                            : theme === "light" && type2 === "secondary" && style === "default"
                            ? "text-primary-500"
                            : ""
                    } ${
                        style === "default" && ["primary", "secondary"].includes(type2)
                            ? "leading-[var(--body-large-bold-line-height)]"
                            : ""
                    } ${style === "default" && ["primary", "secondary"].includes(type2) ? "font-body-large-bold" : ""} ${
                        style === "icon" ? "grow" : ""
                    } ${
                        style === "default" && ["primary", "secondary"].includes(type2)
                            ? "font-[number:var(--body-large-bold-font-weight)]"
                            : ""
                    } ${style === "default" && ["primary", "secondary"].includes(type2) ? "text-center" : ""} ${
                        style === "default" && ["primary", "secondary"].includes(type2)
                            ? "text-[length:var(--body-large-bold-font-size)]"
                            : ""
                    } ${style === "icon" ? "gap-[16px]" : state === "default" ? "gap-[12px]" : ""} ${
                        style === "default" && ["primary", "secondary"].includes(type2)
                            ? "tracking-[var(--body-large-bold-letter-spacing)]"
                            : ""
                    } ${style === "icon" || type2 === "social" ? "justify-center" : ""} ${autoLayoutClassName}`}
                >
                    {style === "default" && ["primary", "secondary"].includes(type2) && <>{text}</>}

                    {style === "icon" && (
                        <>
                            <div className="w-[20px] h-[20px] relative">
                                <div
                                    className={`w-[17px] left-[2px] top-[2px] bg-[100%_100%] h-[17px] relative ${
                                        type3 === "filled" && state === "active" && theme === "default"
                                            ? "bg-[url(union.svg)]"
                                            : state === "disabled" && type2 === "primary"
                                            ? "bg-[url(union-7.svg)]"
                                            : type3 === "filled" && theme === "light"
                                            ? "bg-[url(union-2.svg)]"
                                            : type3 === "filled" && theme === "dark"
                                            ? "bg-[url(union-5.svg)]"
                                            : theme === "light" && type3 === "rounded"
                                            ? "bg-[url(union-4.svg)]"
                                            : type3 === "rounded" && theme === "dark"
                                            ? "bg-[url(union-6.svg)]"
                                            : state === "disabled" && type2 === "secondary"
                                            ? "bg-[url(union-8.svg)]"
                                            : type3 === "rounded" && type2 === "primary"
                                            ? "bg-[url(union-3.svg)]"
                                            : ""
                                    }`}
                                />
                            </div>
                            <div
                                className={`font-body-large-bold w-fit mt-[-1.00px] tracking-[var(--body-large-bold-letter-spacing)] text-[length:var(--body-large-bold-font-size)] [font-style:var(--body-large-bold-font-style)] font-[number:var(--body-large-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-large-bold-line-height)] relative ${
                                    theme === "light" ? "text-primary-500" : "text-others-white"
                                }`}
                            >
                                {text}
                            </div>
                            <div className="w-[20px] h-[20px] relative">
                                <div className="h-[20px]">
                                    <div
                                        className={`w-[15px] left-[2px] top-[5px] bg-[100%_100%] h-[10px] relative ${
                                            type3 === "filled" && state === "active" && theme === "default"
                                                ? "bg-[url(exclude.svg)]"
                                                : state === "disabled" && type2 === "primary"
                                                ? "bg-[url(exclude-7.svg)]"
                                                : type3 === "filled" && theme === "light"
                                                ? "bg-[url(exclude-2.svg)]"
                                                : type3 === "filled" && theme === "dark"
                                                ? "bg-[url(exclude-5.svg)]"
                                                : theme === "light" && type3 === "rounded"
                                                ? "bg-[url(exclude-4.svg)]"
                                                : type3 === "rounded" && theme === "dark"
                                                ? "bg-[url(exclude-6.svg)]"
                                                : state === "disabled" && type2 === "secondary"
                                                ? "bg-[url(exclude-8.svg)]"
                                                : type3 === "rounded" && type2 === "primary"
                                                ? "bg-[url(exclude-3.svg)]"
                                                : ""
                                        }`}
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {state === "default" && (
                        <>
                            <img
                                className={`h-[24px] relative ${
                                    ["apple", "facebook"].includes(type3) ? "w-[24px]" : type3 === "google" ? "w-[23.04px]" : ""
                                }`}
                                alt="Frame"
                                src={
                                    theme === "light" && type3 === "apple"
                                        ? "image.svg"
                                        : theme === "dark" && type3 === "apple"
                                        ? "frame-3.svg"
                                        : theme === "light" && type3 === "google"
                                        ? "frame.svg"
                                        : theme === "dark" && type3 === "google"
                                        ? "frame-4.svg"
                                        : theme === "light" && type3 === "facebook"
                                        ? "frame-2.svg"
                                        : type3 === "facebook" && theme === "dark"
                                        ? "frame-5.svg"
                                        : undefined
                                }
                            />
                            <div
                                className={`font-body-large-semibold w-fit tracking-[var(--body-large-semibold-letter-spacing)] [font-style:var(--body-large-semibold-font-style)] text-[length:var(--body-large-semibold-font-size)] font-[number:var(--body-large-semibold-font-weight)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap relative ${
                                    theme === "light" ? "text-greyscale-900" : theme === "dark" ? "text-others-white" : ""
                                }`}
                            >
                                {type3 === "apple" && <>Continue with Apple</>}

                                {type3 === "google" && <>Continue with Google</>}

                                {type3 === "facebook" && <>Continue with Facebook</>}
                            </div>
                        </>
                    )}
                </div>
            )}

        </div>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["login", "button"]),
    type2: PropTypes.oneOf(["primary", "social", "secondary", "icon"]),
    type3: PropTypes.oneOf(["facebook", "tertiary", "google", "rounded", "filled", "secondary", "primary", "apple"]),
    style: PropTypes.oneOf(["icon", "default"]),
    state: PropTypes.oneOf(["default", "active", "disabled"]),
    theme: PropTypes.oneOf(["dark", "light", "default"]),
    component: PropTypes.oneOf(["button"]),
    text: PropTypes.string,
};
