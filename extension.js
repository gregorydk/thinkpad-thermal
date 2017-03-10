const Extension = imports.misc.extensionUtils.getCurrentExtension();
const ThinkPadThermal = Extension.imports.thinkpad_thermal;

function init() {
    return new ThinkPadThermal.ThinkPadThermal();
}