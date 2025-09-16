import React, { useEffect, useMemo, useState } from "react";
// Import CSS from assets folder for visual fidelity of the HTML screens.
// These relative paths point to the monorepo root; CRA will bundle from src with correct relative resolution via webpack aliasing if configured.
// Since we cannot import CSS outside src directly, we mirror necessary rules already included in component-level CSS (Home.common.css/Home.screen.css).
// For this demo, we import the already integrated CSS used by Home to match the design.
import "./Home.common.css";
import "./Home.screen.css";

/**
 * PUBLIC_INTERFACE
 * AssetsDemo combines all provided HTML screens from the assets folder into a single React component
 * for review/prototyping. It replicates the DOM structure and basic interactivity previously handled
 * by assets/app.js in a React-friendly way.
 *
 * Notes:
 * - Fonts loaded via Google Fonts in raw HTML are not auto-included here. If you need pixel-perfect typography,
 *   include fonts in index.html or via a font loader. Current CSS uses system fallbacks with the same families named.
 * - Images referenced in the original HTML are served from public/assets/figmaimages in CRA. Ensure files exist under public.
 */
export default function AssetsDemo() {
  // Accessibility helper: show focus outlines when Tab is pressed (mirrors assets/app.js)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Tab") {
        document.documentElement.classList.add("show-focus-outlines");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Local state for favorites (from app.js ids)
  const [favorites, setFavorites] = useState({
    "n1-80": false,
    "n1-89": false,
    "n1-98": false,
    "n1-122": false,
  });

  const favoriteStyles = useMemo(() => {
    return Object.keys(favorites).reduce((acc, key) => {
      const active = favorites[key];
      acc[key] = {
        cursor: "pointer",
        filter: active ? "drop-shadow(0 0 4px rgba(239,42,57,0.8))" : "none",
      };
      return acc;
    }, {});
  }, [favorites]);

  const toggleFavorite = (key) => {
    setFavorites((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      // eslint-disable-next-line no-console
      console.log("Toggle favorite:", key, next[key]);
      return next;
    });
  };

  const handleFilterClick = () => {
    // eslint-disable-next-line no-console
    console.log("Filters clicked");
  };

  const handleCtaClick = () => {
    // eslint-disable-next-line no-console
    console.log("Floating CTA clicked");
  };

  // Helper to map image names to CRA public folder path
  const img = (name) =>
    `${process.env.PUBLIC_URL || ""}/assets/figmaimages/${name}`;

  return (
    <div className="page-wrap">
      {/* Section: home-screen-1-49.html */}
      <section aria-labelledby="assets-home-1-49-title">
        <h2 id="assets-home-1-49-title" className="visually-hidden">
          Home - 1:49
        </h2>
        <main className="home-screen fg-screen" role="main" aria-label="home screen">
          <div className="home-root">
            {/* Foodgo title */}
            <div id="n1-50" className="text typo-5">
              Foodgo
            </div>

            {/* Subtitle */}
            <div id="n1-51" className="text typo-6">
              Order your favourite food!
            </div>

            {/* Mask group avatar */}
            <div id="n1-52" className="group" aria-hidden="true">
              <div id="n1-53" className="rect round-20" />
              <div id="n1-54" className="rect">
                <img
                  src={img("figma_image_1_54.png")}
                  alt=""
                  className="fit-cover"
                />
              </div>
            </div>

            {/* Search + filter */}
            <div id="n1-55" className="group" aria-label="search and filter">
              <div id="n1-56" className="rect round-20 shadow-0" />
              <button
                id="n1-57"
                type="button"
                className="group btn-unstyled"
                onClick={handleFilterClick}
                aria-label="Open filters"
              >
                <div id="n1-58" className="rect round-20" />
                <div id="n1-59" className="icon" aria-hidden="true" />
              </button>
              <div id="n1-60" className="group" aria-label="search input">
                <div id="n1-61" className="icon" aria-hidden="true" />
                <div id="n1-62" className="text typo-7">
                  Search
                </div>
              </div>
            </div>

            {/* Categories strip */}
            <div id="n1-63" className="frame">
              <div id="n1-64" className="frame">
                {/* All */}
                <div id="n1-65" className="group">
                  <div id="n1-66" className="rect round-20 shadow-1" />
                  <div id="n1-67" className="text typo-8">
                    All
                  </div>
                </div>
                {/* Combos */}
                <div id="n1-68" className="group">
                  <div id="n1-69" className="rect round-20" />
                  <div id="n1-70" className="text typo-9">
                    Combos
                  </div>
                </div>
                {/* Sliders */}
                <div id="n1-71" className="group">
                  <div id="n1-72" className="rect round-20" />
                  <div id="n1-73" className="text typo-9">
                    Sliders
                  </div>
                </div>
                {/* Classic */}
                <div id="n1-74" className="group">
                  <div id="n1-75" className="rect round-20" />
                  <div id="n1-76" className="text typo-9">
                    Classic
                  </div>
                </div>
              </div>
            </div>

            {/* Cards grid */}
            <div id="n1-77" className="group">
              {/* Card A */}
              <div id="n1-78" className="group">
                <div id="n1-79" className="rect round-20 shadow-2" />
                <div id="n1-83" className="rect">
                  <img
                    src={img("figma_image_1_83.png")}
                    alt="Cheeseburger Wendy's Burger image"
                    className="fit-cover"
                  />
                </div>
                <div id="n1-82" className="ellipse" />
                <div id="n1-81" className="text typo-10">
                  Cheeseburger Wendy&apos;s Burger
                </div>
                <div id="n1-84" className="group" aria-label="rating 4.9">
                  <div id="n1-85" className="icon" aria-hidden="true" />
                  <div id="n1-86" className="text typo-11">
                    4.9
                  </div>
                </div>
                <button
                  id="n1-80"
                  type="button"
                  className="icon btn-unstyled"
                  aria-label="add to favorites"
                  onClick={() => toggleFavorite("n1-80")}
                  style={favoriteStyles["n1-80"]}
                />
              </div>

              {/* Card B */}
              <div id="n1-87" className="group">
                <div id="n1-88" className="rect round-20 shadow-2" />
                <div id="n1-92" className="rect">
                  <img
                    src={img("figma_image_1_92.png")}
                    alt="Hamburger Veggie Burger image"
                    className="fit-cover"
                  />
                </div>
                <div id="n1-91" className="ellipse" />
                <div id="n1-90" className="text typo-10">
                  Hamburger <br /> Veggie Burger
                </div>
                <div id="n1-93" className="group" aria-label="rating 4.8">
                  <div id="n1-94" className="icon" aria-hidden="true" />
                  <div id="n1-95" className="text typo-11">
                    4.8
                  </div>
                </div>
                <button
                  id="n1-89"
                  type="button"
                  className="icon btn-unstyled"
                  aria-label="add to favorites"
                  onClick={() => toggleFavorite("n1-89")}
                  style={favoriteStyles["n1-89"]}
                />
              </div>

              {/* Card C */}
              <div id="n1-96" className="group">
                <div id="n1-97" className="rect round-20 shadow-2" />
                <div id="n1-101" className="rect">
                  <img
                    src={img("figma_image_1_101.png")}
                    alt="Hamburger Chicken Burger image"
                    className="fit-cover"
                  />
                </div>
                <div id="n1-100" className="ellipse" />
                <div id="n1-99" className="text typo-10">
                  Hamburger <br /> Chicken Burger
                </div>
                <div id="n1-102" className="group" aria-label="rating 4.6">
                  <div id="n1-103" className="icon" aria-hidden="true" />
                  <div id="n1-104" className="text typo-11">
                    4.6
                  </div>
                </div>
                <button
                  id="n1-98"
                  type="button"
                  className="icon btn-unstyled"
                  aria-label="add to favorites"
                  onClick={() => toggleFavorite("n1-98")}
                  style={favoriteStyles["n1-98"]}
                />
              </div>

              {/* Card D */}
              <div id="n1-105" className="group">
                <div id="n1-106" className="rect round-20 shadow-2" />
                <div id="n1-110" className="rect">
                  <img
                    src={img("figma_image_1_110.png")}
                    alt="Hamburger Fried Chicken Burger image"
                    className="fit-cover"
                  />
                </div>
                <div id="n1-109" className="ellipse" />
                <div id="n1-108" className="text typo-10">
                  Hamburger <br /> Fried Chicken Burger
                </div>
                <div id="n1-111" className="group" aria-label="rating 4.5">
                  <div id="n1-112" className="icon" aria-hidden="true" />
                  <div id="n1-113" className="text typo-11">
                    4.5
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar background elements (decorative) */}
            <div id="n1-115" className="group" aria-hidden="true">
              <div id="n1-116" className="boolean-op">
                <div id="n1-117" className="rect" />
                <div id="n1-118" className="ellipse" />
              </div>
              <div id="n1-119" className="group">
                <div id="n1-120" className="ellipse" />
                <div id="n1-121" className="ellipse" />
              </div>
            </div>

            {/* Bottom nav icons */}
            <button
              id="n1-123"
              type="button"
              className="icon btn-unstyled"
              aria-label="Home"
            />
            <button
              id="n1-124"
              type="button"
              className="icon btn-unstyled"
              aria-label="User"
            />
            <button
              id="n1-125"
              type="button"
              className="icon btn-unstyled"
              aria-label="Comments"
            />
            <button
              id="n1-122"
              type="button"
              className="icon btn-unstyled"
              aria-label="Favorites"
              onClick={() => toggleFavorite("n1-122")}
              style={favoriteStyles["n1-122"]}
            />

            {/* Tiny dot */}
            <div id="n1-126" className="ellipse" aria-hidden="true" />

            {/* Floating CTA */}
            <button
              id="n1-127"
              type="button"
              className="group btn-unstyled"
              aria-label="Add item"
              onClick={handleCtaClick}
            >
              <div id="n1-128" className="ellipse" />
              <div id="n1-129" className="group">
                <div id="n1-130" className="icon" aria-hidden="true" />
                <div id="n1-131" className="icon" aria-hidden="true" />
              </div>
            </button>
          </div>
        </main>
      </section>
      {/* If more HTML files are added to assets, add additional sections above similarly,
          importing/bridging any CSS they require. */}
    </div>
  );
}
