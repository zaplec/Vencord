export * as Plugins from "./plugins";
export * as Webpack from "./webpack";
export * as Api from "./api";
export * as Updater from "./utils/updater";
export * as QuickCss from "./utils/quickCss";
export * as Swc from "@swc/wasm-web";
import initSwc from "@swc/wasm-web";

import { popNotice, showNotice } from "./api/Notices";
import { Settings } from "./api/settings";
import { startAllPlugins } from "./plugins";

export { Settings };

import "./webpack/patchWebpack";
import "./utils/quickCss";
import { checkForUpdates, UpdateLogger } from './utils/updater';
import { onceReady } from "./webpack";
import { Router } from "./webpack/common";
import IpcEvents from "./utils/IpcEvents";

export let Components;

async function init() {
    await initSwc(await VencordNative.ipc.invoke(IpcEvents.GET_SWC_WASM));
    await onceReady;
    startAllPlugins();
    Components = await import("./components");

    try {
        const isOutdated = await checkForUpdates();
        if (isOutdated && Settings.notifyAboutUpdates)
            setTimeout(() => {
                showNotice(
                    "A Vencord update is available!",
                    "View Update",
                    () => {
                        popNotice();
                        Router.open("VencordUpdater");
                    }
                );
            }, 10000);
    } catch (err) {
        UpdateLogger.error("Failed to check for updates", err);
    }
}

init();
