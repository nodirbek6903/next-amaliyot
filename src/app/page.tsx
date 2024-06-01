import Layout from "@/components/Layout/layout";
import { Button } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        <h1>world</h1>
        <Button variant="contained">Click</Button>
      </div>
    </Layout>
  );
}
