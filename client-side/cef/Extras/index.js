var extrasBrowser = null;

mp.events.add("CreateExtrasBrowser", () => {
    if (!extrasBrowser)
    {
        extrasBrowser = mp.browsers.new("package://cef/Extras/index.html");
    }
});

mp.events.add("CloseExtrasBrowser", () => {
    if (extrasBrowser)
    {
        extrasBrowser.destroy();
        extrasBrowser = null;
    }
});