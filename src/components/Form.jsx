import React from "react";
import Input from "./Input";
import InputURL from "./InputURL";
import InputTask from "./InputTask";
import plus from "../assets/plus.svg";
import trashCan from "../assets/trash-can.svg";

const Form = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div>
          <form
            action=""
            className="w-full col-span-4 p-2 border border-gray-200 rounded">
            <h1 className="px-2 py-5 text-xl font-bold">Daily Scrum</h1>
            <hr />
            {/* Baris Pertama */}
            <div className="grid grid-cols-2 gap-5 py-3">
              <div>
                <p className="text-lg">Analysist Name</p>
                <Input />
              </div>
              <div>
                <p className="text-lg">Project</p>
                <Input />
              </div>
            </div>

            {/* Baris Kedua */}
            <div className="border border-gray-200 rounded">
              <div className="col-span-4">
                <p className="p-5 text-xl ">Target Hari Ini</p>
                <table className="table-fixed ">
                  <thead className="w-full p-5 bg-slate-200">
                    <tr className="flex items-center justify-between p-4">
                      <th>Nama Anggota</th>
                      <th>URL Task</th>
                      <th>URL Task</th>
                      <th>
                        <button className="p-3 m-0 text-4xl text-center bg-blue-400 rounded">
                          <img src={plus} alt="" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex items-center justify-between gap-2 p-4">
                      <td>
                        <Input />
                      </td>
                      <td>
                        <InputURL />
                      </td>
                      <td>
                        <Input />
                      </td>
                      <td>
                        <button className="p-3 m-0 text-4xl text-center bg-red-400 rounded">
                          <img src={trashCan} alt="" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Baris Ketiga */}
            <div className="mt-3 border border-gray-200 rounded">
              <div className="col-span-4">
                <p className="p-5 text-xl ">Task Terlambat</p>
                <table className="table-fixed ">
                  <thead className="w-full p-5 bg-slate-200">
                    <tr className="flex items-center justify-between p-4">
                      <th>Nama Anggota</th>
                      <th>URL Task</th>
                      <th>Alasan Terlambat</th>
                      <th>
                        <button className="p-3 m-0 text-4xl text-center bg-blue-400 rounded">
                          <img src={plus} alt="" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex items-center justify-between gap-2 p-4">
                      <td>
                        <Input />
                      </td>
                      <td>
                        <InputURL />
                      </td>
                      <td>
                        <InputTask />
                      </td>
                      <td>
                        <button className="p-3 m-0 text-4xl text-center bg-red-400 rounded">
                          <img src={trashCan} alt="" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Baris Keempat */}
            <div className="flex gap-5 mt-4">
              <button className="px-3 py-2 text-blue-600 border border-blue-600 rounded">
                Cancel
              </button>
              <button className="px-3 py-2 text-white bg-blue-600 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
