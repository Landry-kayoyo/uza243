import { Link } from "@tanstack/react-router";
import { Store } from "lucide-react";

export function Logo() {
  return <Link to="/" className="marketnet-logo" aria-label="MarketNet — Accueil"><Store className="marketnet-logo-mark" strokeWidth={1.8} /><span>MarketNet<span className="text-primary">.</span></span></Link>;
}
