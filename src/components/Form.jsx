import React, { useState } from "react";
import Input from "./Input";
import plus from "../assets/plus.svg";
import trashCan from "../assets/trash-can.svg";

const Form = () => {
  const [dataTarget, setDataTarget] = useState([]);
  const [dataTerlambat, setDataTerlambat] = useState([]);

  const handleAddTarget = () => {
    const newTarget = { namaAnggota: "", urlTask: "", statusTask: "" };
    setDataTarget([...dataTarget, newTarget]);
  };

  const handleDeleteTarget = (index) => {
    const updatedTargetData = [...dataTarget];
    updatedTargetData.splice(index, 1);
    setDataTarget(updatedTargetData);
  };

  const handleAddTerlambat = () => {
    const newTerlambat = { namaAnggota: "", urlTask: "", alasanTerlambat: "" };
    setDataTerlambat([...dataTerlambat, newTerlambat]);
  };

  const handleDeleteTerlambat = (index) => {
    const updatedTerlambatData = [...dataTerlambat];
    updatedTerlambatData.splice(index, 1);
    setDataTerlambat(updatedTerlambatData);
  };

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
                <Input placeholder="Select..." image="/src/assets/arrow.svg" />
              </div>
              <div>
                <p className="text-lg">Project</p>
                <Input placeholder="Select..." image="/src/assets/arrow.svg" />
              </div>
            </div>

            {/* Baris Kedua */}
            <div className="border border-gray-200 rounded">
              <div className="col-span-4">
                <p className="p-5 text-xl">Target Hari Ini</p>
                <table className="w-full table-fixed">
                  <thead className="p-5 bg-slate-200">
                    <tr className="flex items-center justify-between p-4">
                      <th>Nama Anggota</th>
                      <th>URL Task</th>
                      <th>Status Task</th>
                      <th>
                        <img
                          src={plus}
                          alt=""
                          className="p-3 m-0 text-4xl text-center bg-blue-400 rounded cursor-pointer"
                          onClick={handleAddTarget}
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTarget.map((row, index) => (
                      <tr
                        key={index}
                        className="flex items-center justify-between gap-2 p-4">
                        <td>
                          <Input
                            placeholder="Select..."
                            image="/src/assets/arrow.svg"
                            value={row.namaAnggota}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                namaAnggota: e.target.value,
                              };
                              const updatedTargetData = [...dataTarget];
                              updatedTargetData[index] = updatedRow;
                              setDataTarget(updatedTargetData);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            placeholder="URL Task"
                            value={row.urlTask}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                urlTask: e.target.value,
                              };
                              const updatedTargetData = [...dataTarget];
                              updatedTargetData[index] = updatedRow;
                              setDataTarget(updatedTargetData);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            placeholder="Selec..."
                            image="/src/assets/arrow.svg"
                            value={row.statusTask}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                statusTask: e.target.value,
                              };
                              const updatedTargetData = [...dataTarget];
                              updatedTargetData[index] = updatedRow;
                              setDataTarget(updatedTargetData);
                            }}
                          />
                        </td>
                        <td>
                          <img
                            src={trashCan}
                            alt=""
                            className="p-3 m-0 text-4xl text-center bg-red-400 rounded cursor-pointer"
                            onClick={() => handleDeleteTarget(index)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Baris Ketiga */}
            <div className="mt-3 border border-gray-200 rounded">
              <div className="col-span-4">
                <p className="p-5 text-xl ">Task Terlambat</p>
                <table className="w-full table-fixed ">
                  <thead className="p-5 bg-slate-200">
                    <tr className="flex items-center justify-between p-4">
                      <th>Nama Anggota</th>
                      <th>URL Task</th>
                      <th>Alasan Terlambat</th>
                      <th>
                        <img
                          src={plus}
                          alt=""
                          className="p-3 m-0 text-4xl text-center bg-blue-400 rounded cursor-pointer"
                          onClick={handleAddTerlambat}
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTerlambat.map((row, index) => (
                      <tr
                        key={index}
                        className="flex items-center justify-between gap-2 p-4">
                        <td>
                          <Input
                            placeholder="Select..."
                            image="/src/assets/arrow.svg"
                            value={row.namaAnggota}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                namaAnggota: e.target.value,
                              };
                              const updatedTerlambatData = [...dataTerlambat];
                              updatedTerlambatData[index] = updatedRow;
                              setDataTerlambat(updatedTerlambatData);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            placeholder="URL Task"
                            value={row.urlTask}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                urlTask: e.target.value,
                              };
                              const updatedTerlambatData = [...dataTerlambat];
                              updatedTerlambatData[index] = updatedRow;
                              setDataTerlambat(updatedTerlambatData);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            placeholder="Alasan Terlambat"
                            value={row.statusTask}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                statusTask: e.target.value,
                              };
                              const updatedTerlambatData = [...dataTerlambat];
                              updatedTerlambatData[index] = updatedRow;
                              setDataTerlambat(updatedTerlambatData);
                            }}
                          />
                        </td>
                        <td>
                          <img
                            src={trashCan}
                            alt=""
                            className="p-3 m-0 text-4xl text-center bg-red-400 rounded cursor-pointer"
                            onClick={() => handleDeleteTerlambat(index)}
                          />
                        </td>
                      </tr>
                    ))}
                    {/* <tr className="flex items-center justify-between gap-2 p-4">
                      <td>
                        <Input
                          placeholder="Select..."
                          image="/src/assets/arrow.svg"
                        />
                      </td>
                      <td>
                        <Input placeholder="URL Task" />
                      </td>
                      <td>
                        <Input placeholder="Alasan Terlambat" />
                      </td>
                      <td>
                        <img
                          src={trashCan}
                          alt=""
                          className="p-3 m-0 text-4xl text-center bg-red-400 rounded cursor-pointer"
                          onClick={() => handleDeleteTerlambat(index)}
                        />
                      </td>
                    </tr> */}
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
