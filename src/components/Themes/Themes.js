const themes = [
    {
        backgroundColour : "#7FB3D5",
        textColour : "#195775",
    },


    {
        backgroundColour : "#ffd299",
        textColour : "#dd6236",
    },
    {
        backgroundColour : "#9B111E",
        textColour : "#ffaea0",
    },

    {
        backgroundColour : "#61bc84",
        textColour : "#345e37",
    },
    {
        backgroundColour : "#FFEBCD",
        textColour : "#8B5A2B",
    },



]


export const getTheme = (themeIndex) => {
    const modThemeIndex = themeIndex % themes.length;
    return themes[modThemeIndex];
};