import "./ListForm.scss";
import ItemPanel from "../ItemPanel/ItemPanel";
import { Item, MOCK_DATA } from "../../MockData";
import { useState } from "react";

type Props = {
  items: Item[];
};

const varieties = Object.fromEntries(
  MOCK_DATA.varieties.map((variety) => [String(variety.code), variety])
);

function ListForm({ items }: Props) {
  const [currentCode, setCurrentCode] = useState<string>("");

  const [expanded, setExpanded] = useState<string | false>(false);

  const [confirmedItem, setConfirmedItem] = useState("");

  const handleExpand =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const confirmItem = (
    parameters: { [key: string]: string },
    panelId: string
  ) => {
    setCurrentCode(Object.values(parameters).join("."));
    setConfirmedItem(panelId);
  };

  return (
    <div className="accordion-section">
      <div className="accordion-wrapper">
        <div className="product">
          <h1 className="product__title">
            CODE:{" "}
            <span className="product__title__code">
              {currentCode.length ? currentCode : "-"}
            </span>
          </h1>
        </div>
        <div className="accordion">
          {items.map((item, i) => {
            const id = `panel${i}`;

            return (
              <ItemPanel
                key={id}
                item={item}
                confirmed={confirmedItem == id}
                currentCode={currentCode}
                id={id}
                varieties={varieties}
                expanded={expanded}
                handleExpand={handleExpand}
                confirmItem={confirmItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListForm;
