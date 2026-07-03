import { useEffect, useMemo, useState } from "react";
import { FaSearch, FaSignOutAlt, FaSyncAlt, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LeadsTable from "./LeadsTable";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzKFiGufrpnVOdCEsTuMyUPLejnEru8shNFcMLdaJXSlJddcbQJm6ohGJTGtfaYa8Vs/exec";

export default function Dashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${SCRIPT_URL}?action=getLeads`);
      const data = await res.json();

      setLeads(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) =>
      Object.values(lead)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, leads]);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              {getGreeting()}, Ankush 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Welcome back to Sharma RK & Co. Admin Panel
            </p>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

        {/* Cards */}

        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-500">
                  Total Leads
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {leads.length}
                </h2>
              </div>

              <FaUsers className="text-4xl text-blue-700" />

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="mb-6 flex flex-col gap-4 md:flex-row">

          <div className="relative flex-1">

            <FaSearch className="absolute left-4 top-4 text-slate-400" />

            <input
              type="text"
              placeholder="Search Leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none"
            />

          </div>

          <button
            onClick={fetchLeads}
            className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white"
          >
            <FaSyncAlt />
            Refresh
          </button>

        </div>

        {/* Table */}

        <LeadsTable
          leads={filteredLeads}
          loading={loading}
          refresh={fetchLeads}
        />

      </div>

    </div>
  );
}