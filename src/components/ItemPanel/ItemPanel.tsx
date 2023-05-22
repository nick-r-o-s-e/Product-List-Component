import "./ItemPanel.scss";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { Variety, Item } from "../../MockData";

type Props = {
  item: Item;
  id: string;
  varieties: {
    [k: string]: Variety;
  };
  confirmed: boolean;
  expanded: string | false;
  currentCode: string;
  handleExpand: (
    panel: string
  ) => (_: React.SyntheticEvent, isExpanded: boolean) => void;
  confirmItem: (parameters: { [key: string]: string }, panelId: string) => void;
};

function ItemPanel({
  item,
  id,
  varieties,
  expanded,
  confirmed,
  currentCode,
  handleExpand,
  confirmItem,
}: Props) {
  const [parameters, setParameters] = useState<{
    [k: string]: string | boolean;
  }>(
    Object.fromEntries([
      ["code", item.code],
      ...item.varieties.map((variety) => [variety, false]),
    ])
  );

  const picked =
    !Object.values(parameters).every((val) => val) ||
    (confirmed && currentCode == Object.values(parameters).join("."));

  const handleChange = (
    e: SelectChangeEvent<string | boolean>,
    code: string
  ) => {
    setParameters({ ...parameters, [code]: e.target.value });
  };

  return (
    <Accordion
      className={confirmed ? "picked" : ""}
      key={id}
      expanded={expanded === id}
      onChange={handleExpand(id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}bh-content`}
        id={`${id}bh-header`}
      >
        <Typography>{item.description}</Typography>
      </AccordionSummary>
      <div className="item-details">
        {item.varieties.map((code) => {
          const variety = varieties[code];

          return (
            <div key={uuidv4()} className="detail">
              <FormControl sx={{ minWidth: 140 }} size="small">
                <InputLabel id="demo-select-small-label">
                  {variety.description}
                </InputLabel>

                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={parameters[code] || ""}
                  label={variety.description}
                  onChange={(e: SelectChangeEvent<string | boolean>) => {
                    handleChange(e, code);
                  }}
                >
                  {variety.options.map((option) => {
                    return (
                      <MenuItem key={uuidv4()} value={option.code}>
                        {option.description}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          );
        })}

        <div
          className={`detail ${
            item.varieties.length % 2 == 0 ? "detail-odd" : ""
          }`}
        >
          <Button
            disabled={picked}
            variant="contained"
            color="success"
            sx={{ width: 140, height: "99%" }}
            onClick={() => {
              confirmItem(parameters as { [key: string]: string }, id);
            }}
          >
            CONFIRM
          </Button>
        </div>
      </div>
    </Accordion>
  );
}

export default ItemPanel;
