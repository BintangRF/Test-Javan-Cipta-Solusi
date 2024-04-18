import React, { useEffect, useState } from "react";
import Input from "./Input";
import plus from "../assets/plus.svg";
import trashCan from "../assets/trash-can.svg";
import FormDataDisplay from "./FormDataDisplay";
import Select from "react-select";
import Swal from "sweetalert2";

const Form = () => {
  const [analystName, setAnalystName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [dataTarget, setDataTarget] = useState([]);
  const [dataTerlambat, setDataTerlambat] = useState([]);
  const [formData, setFormData] = useState({
    analyst_name: [],
    project_name: [],
    target_hari_ini: [],
    task_terlambat: [],
  });

  const analystOptions = [
    { value: "Name 1", label: "Name 1" },
    { value: "Name 2", label: "Name 2" },
    { value: "Name 3", label: "Name 3" },
    { value: "Name 4", label: "Name 4" },
    { value: "Name 5", label: "Name 5" },
    { value: "Name 6", label: "Name 6" },
  ];

  const projectOptions = [
    { value: "Project A", label: "Project A" },
    { value: "Project B", label: "Project B" },
    { value: "Project C", label: "Project C" },
    { value: "Project D", label: "Project D" },
    { value: "Project E", label: "Project E" },
    { value: "Project F", label: "ProjeFt F" },
  ];

  const anggotaOptions = [
    { value: "Anggota 1", label: "Anggota 1" },
    { value: "Anggota 2", label: "Anggota 2" },
    { value: "Anggota 3", label: "Anggota 3" },
    { value: "Anggota 4", label: "Anggota 4" },
    { value: "Anggota 5", label: "Anggota 5" },
    { value: "Anggota 6", label: "Anggota 6" },
  ];

  const taskOptions = [
    { value: "Task 1", label: "Task 1" },
    { value: "Task 2", label: "Task 2" },
    { value: "Task 3", label: "Task 3" },
  ];

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

  useEffect(() => {
    const updatedFormData = {
      analyst_name: analystName,
      project_name: projectName,
      target_hari_ini: dataTarget,
      task_terlambat: dataTerlambat,
    };
    setFormData(updatedFormData);
  }, [analystName, projectName, dataTarget, dataTerlambat]);

  const showSwal = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Error",
      text: "Data gagal disimpan",
      icon: "error",
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div>
          <form className="w-full col-span-4 p-2 border border-gray-200 rounded">
            <h1 className="px-2 py-5 text-xl font-bold">Daily Scrum</h1>
            <hr />
            {/* Baris Pertama */}
            <div className="grid grid-cols-2 gap-5 py-3">
              <div>
                <p className="text-lg">Analysist Name</p>
                <Select
                  options={analystOptions}
                  value={analystOptions.find(
                    (option) => option.value === analystName
                  )}
                  onChange={(selectedOption) =>
                    setAnalystName(selectedOption.value)
                  }
                />
              </div>
              <div>
                <p className="text-lg">Project</p>
                <Select
                  options={projectOptions}
                  value={projectOptions.find(
                    (option) => option.value === projectName
                  )}
                  onChange={(selectedOption) =>
                    setProjectName(selectedOption.value)
                  }
                />
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
                          <Select
                            options={anggotaOptions}
                            value={anggotaOptions.find(
                              (option) => option.value === row.namaAnggota
                            )}
                            onChange={(selectedOption) => {
                              const updatedRow = {
                                ...row,
                                namaAnggota: selectedOption.value,
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
                          <Select
                            options={taskOptions}
                            value={taskOptions.find(
                              (option) => option.value === row.statusTask
                            )}
                            onChange={(selectedOption) => {
                              const updatedRow = {
                                ...row,
                                statusTask: selectedOption.value,
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
                          <Select
                            options={anggotaOptions}
                            value={anggotaOptions.find(
                              (option) => option.value === row.namaAnggota
                            )}
                            onChange={(selectedOption) => {
                              const updatedRow = {
                                ...row,
                                namaAnggota: selectedOption.value,
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
                              const updatedTerlambatData = [...dataTerlambat];
                              updatedTerlambatData[index] = updatedRow;
                              setDataTerlambat(updatedTerlambatData);
                            }}
                          />
                        </td>
                        <td>
                          <Input
                            placeholder="Alasan Terlambat"
                            value={row.alasanTerlambat}
                            onChange={(e) => {
                              const updatedRow = {
                                ...row,
                                alasanTerlambat: e.target.value,
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
                  </tbody>
                </table>
              </div>
            </div>

            {/* Baris Keempat */}
            <div className="flex gap-5 mt-4">
              <button className="px-3 py-2 text-blue-600 border border-blue-600 rounded">
                Cancel
              </button>
              <button
                className="px-3 py-2 text-white bg-blue-600 rounded"
                onClick={showSwal}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Baris Kelima */}
      <div className="flex justify-center w-full">
        <FormDataDisplay formData={formData} />
      </div>
    </>
  );
};

export default Form;
