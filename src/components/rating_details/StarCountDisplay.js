import React from "react";

const calWidth = (rating, totRating) => {
  const width = (rating / totRating) * 100;
  return width + "%";
};

const Bar = props => {
  return (
    <div
      style={{
        height: props.barHeight,
        width: props.barWidth,
        margin: "1px",
        backgroundColor: "#252525"
      }}
    />
  );
};

const styles = {
  starLabel: {
    color: "#7a7a7a",
    fontSize: "14px",
    margin: "0px"
  },
  countLabel: {
    color: "#7a7a7a",
    fontSize: "12px",
    margin: "0px"
  }
};

export const StarCountDisplay = props => {
  let maxCount = 0;
  if (props.data) {
    maxCount = Math.max(
      props.data.stars1,
      props.data.stars2,
      props.data.stars3,
      props.data.stars4,
      props.data.stars5
    );

    return (
      <div style={{ minWidth: "200px" }}>
        <span style={styles.starLabel}>
          5 stars{" "}
          <span style={{ fontSize: "12px" }}>({props.data.stars5})</span>
        </span>
        <Bar
          barHeight={props.barHeight}
          barWidth={calWidth(props.data.stars5, maxCount)}
        />
        <span style={styles.starLabel}>
          4 stars{" "}
          <span style={{ fontSize: "12px" }}>({props.data.stars4})</span>
        </span>
        <Bar
          barHeight={props.barHeight}
          barWidth={calWidth(props.data.stars4, maxCount)}
        />

        <span style={styles.starLabel}>
          3 stars{" "}
          <span style={{ fontSize: "12px" }}>({props.data.stars3})</span>
        </span>
        <Bar
          barHeight={props.barHeight}
          barWidth={calWidth(props.data.stars3, maxCount)}
        />

        <span style={styles.starLabel}>
          2 stars{" "}
          <span style={{ fontSize: "12px" }}>({props.data.stars2})</span>
        </span>
        <Bar
          barHeight={props.barHeight}
          barWidth={calWidth(props.data.stars2, maxCount)}
        />

        <span style={styles.starLabel}>
          1 stars{" "}
          <span style={{ fontSize: "12px" }}>({props.data.stars1})</span>
        </span>
        <Bar
          barHeight={props.barHeight}
          barWidth={calWidth(props.data.stars1, maxCount)}
        />
      </div>
    );
  } else {
    return <div />;
  }
};
