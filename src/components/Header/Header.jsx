import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {


    return (
        <div className="header">

            <table>
                <thead>
                    <tr>
                        <th className="schedule_time" colSpan="2">HRnet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="schedule_exercise"><Link to="/employees">View Current Employees <span> →</span></Link></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="schedule_day">Create Employee</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}