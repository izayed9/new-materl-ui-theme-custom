import Image from "next/image";
import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import ProductSmallCard from "@/components/product-small-card";

export default function Home() {
  return (
    <div>
      <Typography variant="body1">working here...</Typography>
      <Typography variant="h6">my coustom components.</Typography>
      <Button variant="text" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>
      <Button variant="contained" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>
      <Button variant="outlined" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>

      <ProductSmallCard />
    </div>
  );
}
