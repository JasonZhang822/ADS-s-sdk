declare global {
    interface Window {
        headdatatagbtn: (hiddenid: string, showid: string, showtype?: string) => void;
        datatagbtn: (id: string, classname: string) => void;
        closead: (eleid: string) => void;
        clickad: (item: any) => Promise<void>;
        toggleArrow: (svgElement: SVGElement) => void;
        maxthon?: boolean;
    }
}
export {};
