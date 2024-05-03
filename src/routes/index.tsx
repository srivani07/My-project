import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HR } from "../pages/hr/HR";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/siderbar/Sidebar";
import { HRConsultants } from "../components/hr-consultants/HRConsultants";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex-container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<p>Patients</p>} />
            <Route path="hr" element={<HR />}>
              <Route index={true} path="consultants" element={<HRConsultants />} />
              {/* <Route path="consultants" element={<HRConsultants />} /> */}
            </Route>
            <Route path="labs" element={<p>Labs</p>} />
            <Route path="pharma" element={<p>Pharma</p>} />
            <Route path="registration" element={<p>Registration</p>} />
            <Route path="consultation" element={<p>Consultation</p>} />
            <Route path="tests-and-reports" element={<p>Tests & Reports</p>} />
            <Route path="billing" element={<p>Billing</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
