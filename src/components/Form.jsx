import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div>
          <form
            action=""
            className="border border-gray-200 rounded p-2 col-span-4">
            <h1 className="font-bold text-xl px-2 py-5">Daily Scrum</h1>
            <hr />
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
