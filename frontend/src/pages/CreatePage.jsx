import React from 'react'
import CreateOrEditPage from "../components/create page/CreateOrEditPage.jsx"

function CreatePage() {
  return (
    <div className="pt-14 ">
      {/*This page should only be accessible if logged in!!!*/}
      <CreateOrEditPage />
    </div>
  )
}

export default CreatePage
