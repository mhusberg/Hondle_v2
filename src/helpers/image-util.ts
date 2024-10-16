
export const getImageURL = (fileName: string) => {
    return new URL(`../../public/images/heroicons/${fileName}`, import.meta.url).href;
};