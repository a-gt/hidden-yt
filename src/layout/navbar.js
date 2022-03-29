import React, { useState, useEffect } from "react";
/*
import {
  Logo,
  MenuToggle,
  Badge,
  Twitter,
  Discord,
  Github,
  ThemeToggle
} from '@components';
*/
import Github from "@components/icons/github";
import { Box } from "@primitives";
import cn from "classnames";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Row, Col, Spacer, Link, useBodyScroll, Text } from "@nextui-org/react";
import { Container, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@hooks/use-media-query";
import { isActive } from "@utils/links";
import { includes } from "lodash";
import { StyledNavContainer, StyledNavMainContainer } from "./styles";
import Search from "@components/search";
import { useTheme } from "next-themes";

/*
const MobileNavigation = dynamic(
  () => import('../components/mobile-navigation'),
  {
    ssr: false
  }
);

const SearchInput = dynamic(
  () => import('../components/search/instant-search'),
  {
    ssr: true
  }
);

*/

const Navbar = ({ isHome, hasNotify, routes }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery(960);
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });
  const [scrollPosition, setScrollPosition] = useState(
    (typeof window !== "undefined" && window.pageYOffset) || 0
  );
  const { theme } = useTheme();

  const detached = hasNotify ? scrollPosition > 30 : scrollPosition > 0;

  useEffect(() => {
    window.addEventListener("scroll", onScroll.bind(this));
    return () => {
      window.removeEventListener("scroll", onScroll.bind(this));
    };
  }, []);

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
      setBodyHidden(false);
    }
  }, [isMobile]);

  const onToggleNavigation = () => {
    setExpanded(!expanded);
    isMobile && setBodyHidden(!expanded);
  };

  const showBlur = !!expanded || !!detached || isHome;

  return (
    <StyledNavMainContainer id="navbar-container">
      <StyledNavContainer detached={detached} showBlur={showBlur}>
        <Container
          lg={true}
          as="nav"
          display="flex"
          wrap="nowrap"
          alignItems="center"
        >
          <Col
            className="navbar__logo-container"
            css={{
              "@mdMax": {
                width: "100%",
              },
            }}
          >
            <Row justify="flex-start" align="center">
              <NextLink href="/">
                <Link href="/">
                  {/*<Logo
                    auto
                    className="navbar__logo"
                    css={{
                      cursor: 'pointer',
                      transition: '$default'
                    }}
                  />
                  <ThreeDCubeSphere size={48} className={cn('navbar__logo', 'text')} />
                  */}
                  {/*<svg height="12" viewBox="0 0 291 69" fill="none" className={cn('navbar__logo')}><path d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z" fill="currentColor"></path></svg>*/}
                  {theme == 'dark' ? <svg
                    height="40"
                    viewBox="0 0 230 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Logo"
                  >
                    <g filter="url(#filter0_d_2_16)">
                      <rect width="230" height="150" rx="12" fill="#2E3035" />
                    </g>
                    <rect
                      x="10"
                      y="10"
                      width="210"
                      height="130"
                      rx="12"
                      fill="#141413"
                    />
                    <g filter="url(#filter1_d_2_16)">
                      <rect
                        x="15"
                        y="15"
                        width="150"
                        height="120"
                        rx="14"
                        fill="#CD4B4B"
                      />
                      <rect
                        x="16.5"
                        y="16.5"
                        width="147"
                        height="117"
                        rx="12.5"
                        stroke="#343842"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter2_d_2_16)">
                      <path
                        d="M112 75L79 94.0526V55.9474L112 75Z"
                        fill="#DFD5D5"
                      />
                    </g>
                    <g filter="url(#filter3_d_2_16)">
                      <circle cx="192.5" cy="33.5" r="12.5" fill="#141C27" />
                      <circle
                        cx="192.5"
                        cy="33.5"
                        r="11.5"
                        stroke="#262B45"
                        stroke-width="2"
                      />
                    </g>
                    <g filter="url(#filter4_d_2_16)">
                      <circle cx="192.5" cy="65.5" r="12.5" fill="#141C27" />
                      <circle
                        cx="192.5"
                        cy="65.5"
                        r="11.5"
                        stroke="#262B45"
                        stroke-width="2"
                      />
                    </g>
                    <rect
                      x="175"
                      y="89"
                      width="36"
                      height="4"
                      rx="2"
                      fill="#3E3C3C"
                    />
                    <rect
                      x="175"
                      y="97"
                      width="36"
                      height="4"
                      rx="2"
                      fill="#3E3C3C"
                    />
                    <rect
                      x="175"
                      y="105"
                      width="36"
                      height="4"
                      rx="2"
                      fill="#3E3C3C"
                    />
                    <rect
                      x="175"
                      y="113"
                      width="36"
                      height="4"
                      rx="2"
                      fill="#3E3C3C"
                    />
                    <rect
                      x="175"
                      y="121"
                      width="36"
                      height="4"
                      rx="2"
                      fill="#3E3C3C"
                    />
                    <defs>
                      <filter
                        id="filter0_d_2_16"
                        x="0"
                        y="0"
                        width="230"
                        height="154"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.115712 0 0 0 0 0.11625 0 0 0 0 0.129167 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_16"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_16"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_2_16"
                        x="15"
                        y="15"
                        width="150"
                        height="122"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_16"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_16"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_2_16"
                        x="79"
                        y="55.9474"
                        width="33"
                        height="42.1051"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_16"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_16"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_2_16"
                        x="180"
                        y="21"
                        width="25"
                        height="29"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_16"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_16"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_2_16"
                        x="180"
                        y="53"
                        width="25"
                        height="29"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_16"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_16"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg> : <svg height="40" viewBox="0 0 230 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_6_17)">
                      <rect width="230" height="150" rx="12" fill="#BFB1AA" />
                    </g>
                    <rect x="10" y="10" width="210" height="130" rx="12" fill="#CCC3B6" />
                    <g filter="url(#filter1_d_6_17)">
                      <rect x="15" y="15" width="150" height="120" rx="14" fill="#CD4B4B" />
                      <rect x="16.5" y="16.5" width="147" height="117" rx="12.5" stroke="#523A2D" stroke-width="3" />
                    </g>
                    <g filter="url(#filter2_d_6_17)">
                      <path d="M112 75L79 94.0526V55.9474L112 75Z" fill="#DFD5D5" />
                    </g>
                    <g filter="url(#filter3_d_6_17)">
                      <circle cx="192.5" cy="33.5" r="12.5" fill="#553D27" />
                      <circle cx="192.5" cy="33.5" r="11.5" stroke="#453126" stroke-width="2" />
                    </g>
                    <g filter="url(#filter4_d_6_17)">
                      <circle cx="192.5" cy="65.5" r="12.5" fill="#553D27" />
                      <circle cx="192.5" cy="65.5" r="11.5" stroke="#453126" stroke-width="2" />
                    </g>
                    <rect x="175" y="89" width="36" height="4" rx="2" fill="#60584D" />
                    <rect x="175" y="97" width="36" height="4" rx="2" fill="#60584D" />
                    <rect x="175" y="105" width="36" height="4" rx="2" fill="#60584D" />
                    <rect x="175" y="113" width="36" height="4" rx="2" fill="#60584D" />
                    <rect x="175" y="121" width="36" height="4" rx="2" fill="#60584D" />
                    <defs>
                      <filter id="filter0_d_6_17" x="0" y="0" width="230" height="154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.445582 0 0 0 0 0.413924 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_17" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_17" result="shape" />
                      </filter>
                      <filter id="filter1_d_6_17" x="15" y="15" width="150" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_17" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_17" result="shape" />
                      </filter>
                      <filter id="filter2_d_6_17" x="79" y="55.9474" width="33" height="42.1051" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_17" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_17" result="shape" />
                      </filter>
                      <filter id="filter3_d_6_17" x="180" y="21" width="25" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_17" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_17" result="shape" />
                      </filter>
                      <filter id="filter4_d_6_17" x="180" y="53" width="25" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_17" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_17" result="shape" />
                      </filter>
                    </defs>
                  </svg>}
                </Link>
              </NextLink>
            </Row>
          </Col>
          <Col
            className="navbar__resources-container"
            css={{ "@mdMax": { d: "none" } }}
          >
            <Row justify="center" align="center">
              <Spacer x={1} y={0} />
              <NextLink href="/search">
                <Link
                  className={cn("navbar__link", {
                    active: isActive(router.pathname, "/search/[[...slug]]"),
                  })}
                  href="#"
                  css={{
                    color: "$text",
                    "&.active": {
                      fontWeight: "600",
                      color: "$primary",
                    },
                  }}
                >
                  Search
                </Link>
              </NextLink>
              <Spacer x={1} y={0} />
              <Link
                className="navbar__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ApexioDaCoder/hidden-yt/discussions/new?category=general"
                title="Leave your feedback"
                css={{
                  color: "$text",
                }}
              >
                Feedback
              </Link>
            </Row>
          </Col>
          <Col className="navbar__search-container">
            <Row
              className="navbar__search-row"
              justify="flex-end"
              align="center"
              css={{
                position: "initial",
                "@mdMax": {
                  jc: "center",
                },
              }}
            >
              <Row
                className="navbar__social-icons-container"
                justify="flex-end"
                align="center"
                gap={1}
                css={{
                  width: "initial",
                  "@mdMax": {
                    d: "none",
                  },
                }}
              >
                <Link
                  className="navbar__social-icon"
                  href="https://github.com/ApexioDaCoder/hidden-yt"
                  target="_blank"
                  rel="noreferrer"
                  css={{
                    m: "0 6px",
                    "& svg": {
                      transition: "$default",
                    },
                    "&:hover": {
                      "& svg": {
                        opacity: 0.7,
                      },
                    },
                  }}
                >
                  <Github size={24} />
                </Link>
                {/*<ThemeToggle
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default'
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7
                      }
                    }
                  }}
                />*/}
              </Row>
              {/*<SearchInput offsetTop={detached ? 0 : 30} />*/}
              <Search />
            </Row>
          </Col>
          <Col
            className="navbar__menu-container"
            css={{
              size: "100%",
              display: "none",
              "@mdMax": {
                display: "flex",
                justifyContent: "flex-end",
              },
            }}
          >
            {/*<ThemeToggle
              className="navbar__social-icon-mobile"
              css={{ m: '0' }}
          />*/}
            <Box
              className="navbar__menu-arrow noselect"
              onClick={onToggleNavigation}
              css={{
                height: "100%",
                minHeight: "40px",
                minWidth: "30px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {/*<MenuToggle expanded={expanded} />*/}
            </Box>
          </Col>
          {/*<MobileNavigation
            hasNotify={hasNotify}
            routes={routes}
            opened={expanded}
            detached={detached}
            onClose={() => {
              setExpanded(false);
              setBodyHidden(false);
            }}
          />*/}
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  );
};

export default Navbar;
