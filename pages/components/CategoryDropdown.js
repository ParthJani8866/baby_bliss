"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { slugify } from "../../utils/slugify"; // adjust path if needed

export default function CategoryDropdown({ categories = [] }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (category) => {
    window.location.href = `/baby-products/${slugify(category.name)}`;
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* Dropdown Trigger */}
      <DropdownMenuTrigger className="flex items-center px-4 py-2 rounded bg-white text-black hover:bg-gray-200 font-semibold border">
        Select Category
        {open ? (
          <ChevronUp className="ml-2 w-4 h-4 transition-transform duration-300" />
        ) : (
          <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300" />
        )}
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent   style={{ zIndex: 1000 }} className="bg-white border border-gray-300 rounded w-56 mt-1 shadow-none">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <DropdownMenuItem
              key={cat.id}
              className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => handleNavigate(cat)}
            >
              {cat.name}
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem className="text-gray-500">
            No categories
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}