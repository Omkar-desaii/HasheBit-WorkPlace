import { Button } from "@mui/material";
import styles from "./side-bar.module.css";
import DescriptionIcon from '@mui/icons-material/Description';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar1} />
      <div className={styles.trendtechInfoWrapper}>
        <div className={styles.trendtechInfo}>TrendTech Info</div>
      </div>
      <div className={styles.frameParent}>
        <Button
          className={styles.frameChild}
          startIcon={<img width="30px" height="30px" src="/graph.png" />}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#451b9a",
            fontSize: "15",
            background: "#d8e9fb",
            border: "#000 solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#d8e9fb" },
            height: 51,
          }}
        >
          Latest Tech Trend
        </Button>
        <Button
          className={styles.frameChild}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#451b9a",
            fontSize: "15",
            background: "#d8e9fb",
            border: "#000 solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#d8e9fb" },
            height: 51,
          }}
        >
          <DescriptionIcon style={{color:"#1D154A",fontSize:'30px'}}/>Featured Case Study
        </Button>
        <Button
          className={styles.frameItem}
          startIcon={<img width="30px" height="30px" src="/quote.png" />}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#451b9a",
            fontSize: "15",
            background: "#d8e9fb",
            border: "#000 solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#d8e9fb" },
            height: 51,
          }}
        >
          Client Testimonial
        </Button>
        <Button
          className={styles.frameInner}
          startIcon={
            <img width="30px" height="30px" src="/event-management.png" />
          }
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#451b9a",
            fontSize: "15",
            background: "#d8e9fb",
            border: "#000 solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#d8e9fb" },
            height: 51,
          }}
        >
          Upcoming Event
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
