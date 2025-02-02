import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUserPlus,
  FaClipboardList,
  FaVideo,
  FaChartLine,
  FaComments,
} from "react-icons/fa";
import React from "react";

export default function Roadmap() {
  return (
    <section className="py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-blue-600">
          How It Works
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mt-4">
          Your guide to navigating the interview process effortlessly!
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <VerticalTimeline>
          {/* Step 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#00BCD4", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#00bcd4", color: "#fff" }}
            icon={<FaUserPlus />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Step 1: Sign Up
            </h3>
            <p className="text-gray-200">
              Create your account to get started with the interview process.
            </p>
          </VerticalTimelineElement>

          {/* Step 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F7B52D", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#f7b52d", color: "#fff" }}
            icon={<FaClipboardList />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Step 2: Create Meeting
            </h3>
            <p className="text-gray-200">
              Schedule your interview session at a time that works best for you.
            </p>
          </VerticalTimelineElement>

          {/* Step 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FF6F6F", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#ff6f6f", color: "#fff" }}
            icon={<FaVideo />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Step 3: Attend Interview
            </h3>
            <p className="text-gray-200">
              Join the virtual interview with your recruiter or panel members.
            </p>
          </VerticalTimelineElement>

          {/* Step 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4CAF50", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#4caf50", color: "#fff" }}
            icon={<FaChartLine />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Step 4: Review Results
            </h3>
            <p className="text-gray-200">
              Get insights into your interview performance and next steps.
            </p>
          </VerticalTimelineElement>

          {/* Step 5 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#7952B3", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#7952b3", color: "#fff" }}
            icon={<FaComments />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Step 5: Receive Feedback
            </h3>
            <p className="text-gray-200">
              Access detailed feedback to improve for future opportunities.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
