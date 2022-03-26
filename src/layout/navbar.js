import React, { useState, useEffect } from 'react';
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
import Github from '@components/icons/github';
import { Box } from '@primitives';
import cn from 'classnames';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { Row, Col, Spacer, Link, useBodyScroll, Text } from '@nextui-org/react';
import { Container, Input } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@hooks/use-media-query';
import { isActive } from '@utils/links';
import { includes } from 'lodash';
import { StyledNavContainer, StyledNavMainContainer } from './styles';
import Search from "@components/search"

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
    (typeof window !== 'undefined' && window.pageYOffset) || 0
  );

  const detached = hasNotify ? scrollPosition > 30 : scrollPosition > 0;

  useEffect(() => {
    window.addEventListener('scroll', onScroll.bind(this));
    return () => {
      window.removeEventListener('scroll', onScroll.bind(this));
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
              '@mdMax': {
                width: '100%'
              }
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
                  <svg height="12" viewBox="0 0 291 69" fill="none" className={cn('navbar__logo')}><path d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z" fill="currentColor"></path></svg>
                </Link>
              </NextLink>
            </Row>
          </Col>
          <Col
            className="navbar__resources-container"
            css={{ '@mdMax': { d: 'none' } }}
          >
            <Row justify="center" align="center">
              <Spacer x={1} y={0} />
              <NextLink href="/search">
                <Link
                  className={cn('navbar__link', {
                    active:
                      isActive(router.pathname, '/search/[[...slug]]')
                  })}
                  href="#"
                  css={{
                    color: '$text',
                    '&.active': {
                      fontWeight: '600',
                      color: '$primary'
                    }
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
                  color: '$text'
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
                position: 'initial',
                '@mdMax': {
                  jc: 'center'
                }
              }}
            >
              <Row
                className="navbar__social-icons-container"
                justify="flex-end"
                align="center"
                gap={1}
                css={{
                  width: 'initial',
                  '@mdMax': {
                    d: 'none'
                  }
                }}
              >
                <Link
                  className="navbar__social-icon"
                  href="https://github.com/ApexioDaCoder/hidden-yt"
                  target="_blank"
                  rel="noreferrer"
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
              size: '100%',
              display: 'none',
              '@mdMax': {
                display: 'flex',
                justifyContent: 'flex-end'
              }
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
                height: '100%',
                minHeight: '40px',
                minWidth: '30px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
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