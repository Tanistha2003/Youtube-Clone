import React, { useState } from "react";
import "./CreateEditChannel.css";

function CreateEditChannel({ setEditCreateChannelBtn }) {

  const CurrentUser = {
    result: {
      id: 1,
      email: "xyz27@gmail.com",
      name: "John",
      joinedOn: "2222-07-15T09:57:23.489Z",
      desc: "Description"
    },
  };

  const [name, setName] = useState(CurrentUser?.result.name);
  const [desc, setDesc] = useState(CurrentUser?.result.desc);

  const handleSubmit = () => {
    if (!name) {
      alert("Please enter name ");
    } else if (!desc) {
      alert("Please enter description ");
    } else {
        setEditCreateChannelBtn(false);
    }
  };

  console.log(typeof setEditCreateChannelBtn); // Should log "function"

  return (
    <div className="container_CreateEditChanel">
      <input
        onClick={() => setEditCreateChannelBtn(false)}
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_CreateEditChanel">
        <h1>
          {CurrentUser?.result.name ? <>Edit</> : <>Create </>}
          Your Channel
        </h1>
        <input
          type="text"
          placeholder="Enter Your/Channel Name"
          className="ibox"
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          type="text"
          rows={15}
          placeholder={"Enter Channel Description"}
          className={"ibox"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          type="submit"
          value={"Submit"}
          onClick={handleSubmit}
          className="ibtn"
        />
      </div>
    </div>
  );
}

export default CreateEditChannel;
