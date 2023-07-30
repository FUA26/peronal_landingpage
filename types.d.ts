type Meta = {
    id: string,
    title: string,
    date: string,
    highlight: string,
    desc: string;
    benner: string;
    tags: string[],
    toc: TOCItem[]
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}

type TOCItem = {
  level: number;
  title: string;
  anchor: string;
}