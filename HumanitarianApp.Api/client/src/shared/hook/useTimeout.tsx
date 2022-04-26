import React from "react"

export const useTimeout = (callback: () => void, event: unknown[], skipFirstRender: boolean = true, sleep: number = 1000) => {
    const [skipFirRender, setSkipFirRender] = React.useState(skipFirstRender)

    const timeRef: React.MutableRefObject<NodeJS.Timeout | null> = React.useRef(null);
    const callbackRef: React.MutableRefObject<() => void> = React.useRef(callback);

    React.useEffect(() => {
        callbackRef.current = (callback);

        skipFirRender ? (setSkipFirRender(!skipFirRender)) : (timeRef.current = setTimeout(() => callbackRef.current(), sleep));

        return () => {
            if (!!timeRef.current) clearTimeout(timeRef.current);
        }
    }, event)
}
