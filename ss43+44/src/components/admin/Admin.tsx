import React from 'react'
import './admin.css'
export default function Admin() {
  return (
    
    <div className='home'>
      <div className='home2'>
        <ul>
          <li><span className="material-symbols-outlined">
home
</span>Home</li>
          <li><span className="material-symbols-outlined">
list
</span>contents</li>
          <li><span className="material-symbols-outlined">
menu
</span>categories</li>
          <li><span className="material-symbols-outlined">
settings
</span>settings</li>
        </ul>
        <ul>
          <li><span className="material-symbols-outlined">
account_circle
</span> Admin</li>
        </ul>
      </div>
      <div className='home3'>
        <div className='item'>
          <button className='new'>+ New item</button>
          
          <ul>
            <li><span className="material-symbols-outlined">
grid_view
</span>Dashboard</li>
            <li>Commarce</li>
            <li>Analytics</li>
            <li>Cyrpto</li>
            <li>Helpdesk</li>
            <li>Monitoring</li>
            <li>Fitnes</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Application</li>
            <li><span className="material-symbols-outlined">

grid_view
</span>Elements</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Forms</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Plugins</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Elements</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Datagrid</li>
            <li><span className="material-symbols-outlined">

grid_view
</span>Settings</li>
          </ul>
        </div>
        <div className='add' >
          <div className='home4'>
            <ul>
              <li>Add new post1</li>
              <li>+ Add Content</li>
              <li>Settings</li>
            </ul>
            <ul>
              <li><input type="text" placeholder='Search content.. ' /></li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
