import "./Output.css";

function Output({ express, color }: { express: string[]; color: string }) {
  return (
    <div style={{ color: color }}>
      <h1>{express}</h1>
      <h3>45</h3>
    </div>
  );
}

export default Output;
