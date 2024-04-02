export type Node = {
  id: string | number;
  label: string;
  showChild?: boolean;
  children?: Node[];
  isChecked?: boolean;
};

export type TreeNodeProps = {
  node: Node;
  showCheckbox: boolean;
};
