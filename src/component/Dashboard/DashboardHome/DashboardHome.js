import * as React from 'react';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className="dashboard-banner dashboard-front-bg">
            <h1 className="fw-bold mb-5">Your Profile</h1>
            <div className="front-bg-profile">
                {
                    user.email && <img width="150" style={{ borderRadius: "50%", border: "3px solid #331a15", color: "white" }} src={user.photoURL} alt="" />
                }
                <div className="py-3">
                    {
                        user.displayName && <h4 className="fw-bold" style={{ fontFamily: 'Rancho' }}>Name: {user.displayName}</h4>
                    }
                    {
                        user.email && <h5>Email: {user.email}</h5>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;