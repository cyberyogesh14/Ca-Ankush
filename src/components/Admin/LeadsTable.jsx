import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzKFiGufrpnVOdCEsTuMyUPLejnEru8shNFcMLdaJXSlJddcbQJm6ohGJTGtfaYa8Vs/exec";

export default function LeadsTable({
    leads,
    loading,
    refresh,
}) {
    const deleteLead = async (row) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this lead?"
        );

        if (!confirmDelete) return;

        try {
            const res = await fetch(
                `${SCRIPT_URL}?action=deleteLead&row=${row}`
            );

            const data = await res.json();

            if (data.success) {
                toast.success("Lead Deleted");
                refresh();
            } else {
                toast.error("Delete Failed");
            }
        } catch (err) {
            console.log(err);
            toast.error("Server Error");
        }
    };

    if (loading) {
        return (
            <div className="rounded-xl bg-white p-10 text-center shadow">
                Loading Leads...
            </div>
        );
    }

    if (leads.length === 0) {
        return (
            <div className="rounded-xl bg-white p-10 text-center shadow">
                No Leads Found
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-2xl bg-white shadow">

            <table className="min-w-full">

                <thead className="bg-slate-800 text-white">

                    <tr>

                        <th className="px-5 py-4 text-left">Date</th>
                        <th className="px-5 py-4 text-left">Name</th>
                        <th className="px-5 py-4 text-left">Email</th>
                        <th className="px-5 py-4 text-left">Phone</th>
                        <th className="px-5 py-4 text-left">Subject</th>
                        <th className="px-5 py-4 text-left">Message</th>
                        <th className="px-5 py-4 text-center">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {leads.map((lead, index) => (

                        <tr
                            key={index}
                            className="border-b hover:bg-slate-50"
                        >

                            <td className="px-5 py-4">
                                {lead.Date}
                            </td>

                            <td className="px-5 py-4">
                                {lead.Name}
                            </td>

                            <td className="px-5 py-4">
                                {lead.Email}
                            </td>

                            <td className="px-5 py-4">
                                {lead.Phone}
                            </td>

                            <td className="px-5 py-4">
                                {lead.Subject}
                            </td>

                            <td className="px-5 py-4 max-w-xs">
                                {lead.Message}
                            </td>

                            <td className="px-5 py-4 text-center">

                                <button
                                    onClick={() => deleteLead(index + 2)}
                                    className="rounded-lg bg-red-600 p-3 text-white hover:bg-red-700"
                                >
                                    <FaTrash />
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
} 