"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Hello World
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Welcome to your modern Next.js application
            </p>
          </div>
        </div>

        {/* Main Card */}
        <Card className="backdrop-blur-sm bg-white/70 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-semibold text-gray-800">
              🎉 Getting Started
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Your journey with Next.js begins here
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-700 leading-relaxed">
                This is a simple Hello World application built with Next.js, Tailwind CSS, and shadcn/ui components.
                It features modern design, responsive layout, and clean typography.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => setClicked(!clicked)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {clicked ? "Thanks for clicking! 🎊" : "Click me! ✨"}
                </Button>
              </div>

              {clicked && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 animate-in slide-in-from-top duration-300">
                  <p className="text-green-700 font-medium">
                    🎈 Awesome! You've successfully interacted with your Hello World app!
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>React 19</span>
            <span>•</span>
            <span>Next.js 15</span>
            <span>•</span>
            <span>Tailwind CSS 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}