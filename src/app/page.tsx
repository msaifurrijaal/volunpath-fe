import { Button, Typography } from "@mui/material";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Typography className={styles.h1}>Test aja si ini</Typography>
      <Button variant="contained">Ini Tombol</Button>
    </main>
  );
}
