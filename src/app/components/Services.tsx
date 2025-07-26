import React from "react";

export const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-[1800px] mx-auto">
      <h1 className="text-4xl font-bold mb-12">Services</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <fieldset className="border border-[#0035FB] rounded-[20px] p-6 w-full">
            <legend className="mb-[10px] font-medium px-[10px] text-lg">
              Inventory Management
            </legend>
            <p className="text-lg p-4">
              Vino Link’s Inventory Management feature ensures the perfect
              balance between raw materials and finished products. With
              real-time monitoring, this tool:
              <ul className="list-disc pl-5 mt-2">
                <li>Prevents stockouts before they impact production.</li>
                <li>
                  Avoids unnecessary overstock, freeing up space and cutting
                  costs.
                </li>
                <li>
                  Triggers early alerts for low levels to enable timely
                  replenishment.
                </li>
                <li>
                  Dynamically adapts to demand, ensuring continuous
                  availability.
                </li>
              </ul>
              This empowers producers to plan precisely, optimize resources, and
              maintain a smooth, profitable production cycle.
            </p>
          </fieldset>
        </div>
        <div>
          <fieldset className="border border-[#0035FB] rounded-[20px] p-6 w-full">
            <legend className="mb-[10px] font-medium px-[10px] text-lg">
              Client Portfolio Management
            </legend>
            <p className="text-lg p-4">
              The Client Portfolio Management module centralizes contacts and
              order history in one place. With this functionality, Vino Link:
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Logs and tracks every interaction and order without missing a
                  detail.
                </li>
                <li>
                  Uncovers sales opportunities by analyzing purchase patterns
                  and preferences.
                </li>
                <li>
                  Sends reminders and alerts to reactivate inactive customers.
                </li>
                <li>
                  Enables personalized service by anticipating client needs and
                  requests.
                </li>
              </ul>
              This allows distributors and wineries to maximize sales, foster
              loyalty, and build lasting business relationships.
            </p>
          </fieldset>
        </div>
        <div>
          <fieldset className="border border-[#0035FB] rounded-[20px] p-6 w-full">
            <legend className="mb-[10px] font-medium px-[10px] text-lg">
              Winemaking Process Control
            </legend>
            <p className="text-lg p-4">
              The Winemaking Process Control feature adapts to each winery’s
              needs, offering end-to-end oversight of every stage. With this
              tool, Vino Link:
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Tracks critical variables (temperature, pH, maceration time)
                  in real time.
                </li>
                <li>
                  Records full traceability from grape reception to bottling.
                </li>
                <li>
                  Automatically issues alerts for deviations in key stages.
                </li>
                <li>
                  Standardizes protocols and documents best practices for each
                  vintage.
                </li>
              </ul>
              This comprehensive control gives producers a proactive, detailed
              overview, ensuring consistency, regulatory compliance, and
              excellence in every label.
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
