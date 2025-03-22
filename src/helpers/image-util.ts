
export const getHeroIconURL = (fileName: string) => {
    return new URL(`../../public/images/heroicons/${fileName}`, import.meta.url).href;
};

export const getIconURL = (fileName: string) => {
    return new URL(`../../public/images/${fileName}`, import.meta.url).href;
}