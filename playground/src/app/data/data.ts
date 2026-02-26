// tool
// - title
// - url
// - category
// - description

// create ToolInfo type
type ToolInfo = {
    url: string;
    category: string;
    description: string;
};

// create Tools class   
class Tools {
    // define new map
    private items = new Map<string,ToolInfo>();

    // add keys into map
    add(key:string, value:ToolInfo): void {
        this.items.set(key,value);
    }

    // return keys
    get(key: string): ToolInfo | undefined {
        return this.items.get(key);
    }
}

// create variable to refer to Tools class
export const t = new Tools();

// add tool
t.add("Storybook", { url: "https://storybook.js.org/", category: "UI library", description: "Storybook is a frontend workshop for building UI components and pages in isolation."})

// output
console.log(t.get("Storybook")?.url);

