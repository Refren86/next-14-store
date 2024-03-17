"use client";

import { useRef } from "react";
import { jwtDecode } from "jwt-decode";

import { useUserStore } from "../hooks/store/useUserStore";

export function StoreInitializer({ accessToken }: { accessToken?: string }) {
  const isInitialized = useRef(false);

  if (!isInitialized.current) {
    useUserStore.setState({
      user: accessToken ? jwtDecode(accessToken) : null,
    });
    isInitialized.current = true;
  }
  return null;
}
