type Props = {
  label: string;
};

export function GuideCategory({ label }: Props) {
  return <p className="guide-category">{label}</p>;
}
