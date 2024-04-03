type CloumnItem = {
  key: string;
  label: string;
  width?: string | number;
  align?: "left" | "center" | "right";
};

export type TableProps = {
  column: CloumnItem[];
  data: {
    [key: string]: any;
  }[];
  height?: string;
  stripe?: boolean;
};
