import React from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";

export default function SearchSection(){
    return (
      <div>
        <Input placeholder={"search"}></Input>
        <Button bgColor="red">
          <p>Search</p>
        </Button>
      </div>
    );
}