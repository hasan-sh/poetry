import React, { useContext } from 'react';
import {
    Link,
    matchPath,
    RouteComponentProps,
    withRouter,
} from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { rootContext } from '../../store';
import styles from './Header.module.css';

export interface HeaderProps extends RouteComponentProps {}

const Header: React.SFC<HeaderProps> = (props) => {
    const {
        userStore: { user },
        selectedPoemStore: { getSelectedPoem },
        settings: { isRtl },
    } = useContext(rootContext);
    const containerAnimationProps = useSpring({
        top: getSelectedPoem ? '-100%' : '0%',
        from: { top: getSelectedPoem ? '0%' : '-100%' },
    });
    const inLoginRoute = matchPath('/login', {
        path: props.location.pathname,
        exact: true,
        strict: false,
    });
    return (
        <animated.div
            style={containerAnimationProps}
            className={styles.container}
        >
            {user ? (
                <h3 className={isRtl ? styles.rtl : ''}>
                    <img
                        src={
                            (user && user.avatar) || '/images/defaultAvatar.png'
                        }
                        alt="user"
                        className={styles.avatar}
                    />
                    Hello,&nbsp;<i>{user && user.userName}</i>
                </h3>
            ) : (
                <Link className="btn" to={inLoginRoute ? '/poems' : '/login'}>
                    {inLoginRoute ? 'Poems' : 'Login'}
                </Link>
            )}
            <Link className="btn" to="/add">
                Add Poem
            </Link>
        </animated.div>
    );
};

export default withRouter(Header);
