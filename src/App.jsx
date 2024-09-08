"use client";
import React, { Component, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./styles/FontAwesome.Pro.6.5.2/css/all.css";
import AppContext from "./components/context/AppContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
export default function App() {
  return (
    <>
      <Header />
      <main className="bg-mainBgColor">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
      jgh
    </>
  );
}
