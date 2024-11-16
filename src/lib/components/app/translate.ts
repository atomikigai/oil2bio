
export interface Read {
    [x: string]: Array<Key>;
}

export interface Key {
    key: string,
    text: string;
}

export async function getText(dictionarie: string, section: string, key: string, text: string) {

    if (dictionarie !== "es") {
        const dictionaries: Key[] = (await import(`../../dictionaries/${dictionarie}/${section}.json`)).default;
        const index = dictionaries.findIndex((x) => x.key === key);

        if (index >= 0) {
            return dictionaries[index].text
        }
    }

    return text
}