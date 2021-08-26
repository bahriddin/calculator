import { addCommas } from "../../functions";

function Output({
  express,
  color,
  oColor,
}: {
  express: string[];
  color: string;
  oColor: string;
}) {
  return (
    <div style={{ color: color }}>
      <h1>
        {express.map((e, id) => {
          if (Number(e)) {
            return addCommas(e);
          } else {
            if (e === "+" || e === "-" || e === "÷" || e === "×" || e === "%") {
              return (
                <span style={{ color: oColor }} key={id} className="mx-1">
                  {e}
                </span>
              );
            } else {
              return e;
            }
          }
        })}
      </h1>
    </div>
  );
}

export default Output;
