"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[332],{98217:function(n){n.exports=JSON.parse('{"functions":[{"name":"Fire","desc":"Fires the signal causing all connected callbacks to fire\\n```lua\\nSignal:Connect(function(arg1, boolean, integer)\\n    print(arg1, tostring(boolean), tostring(integer))\\n    -- Outputs `Argument1 true 3`\\nend)\\n\\nSignal:Fire(\\"Argument1\\", true, 3) -- arguments can be anything you want\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":51,"path":"moonwave/SignalService.lua"}},{"name":"Wait","desc":"Yields the thread and resumes with it\'s arguments when the signal is fired\\n```lua\\ntask.delay(2, function()\\n    Signal:Fire(\\"it waited!\\")\\nend)\\n\\n-- this will yield the thread for approximately 2 seconds\\nlocal stringArgument = Signal:Wait() -- returns \\"it waited!\\" \\n```","params":[],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","yields":true,"source":{"line":67,"path":"moonwave/SignalService.lua"}},{"name":"Connect","desc":"Connects a callback to the signal that will be fired when  \\n`<Signal>:Fire()` is called  \\n\\nand  \\n\\nReturns a connection that can be disconnected by calling  \\n`<Connection>:Disconnect()`\\n```lua\\nlocal Connection = Signal:Connect(function(arg1, boolean, integer)\\n    print(arg1, tostring(boolean), tostring(integer))\\n    -- Outputs `Argument1 true 3`\\nend)\\n\\nSignal:Fire(\\"Argument1\\", true, 3)\\n```","params":[{"name":"callbackFunction","desc":"","lua_type":"fun()"}],"returns":[{"desc":"","lua_type":"Connection"}],"function_type":"method","source":{"line":89,"path":"moonwave/SignalService.lua"}},{"name":"Destroy","desc":"Runs `<Signal>:DisconnectAll()` then destroys/cleans the signal for GC\\n```lua\\nSignal:Destroy()\\nlocal boolean = SignalService.isSignal(Signal) -- false\\n```","params":[],"returns":[],"function_type":"method","source":{"line":98,"path":"moonwave/SignalService.lua"}},{"name":"Dispatch","desc":"Similar to [`<Rodux.Store>:dispatch()`](https://roblox.github.io/rodux/api-reference/#storedispatch)\\n```lua\\nSignal:onDispatch({\\n    NEW_DISPATCH = function(action)\\n        print(action.string) -- This is a dispatch running\\n    end\\n})\\n\\nSignal:Dispatch({\\n    type = \\"NEW_DISPATCH\\",\\n    string = \\"This is a dispatch running\\"\\n})\\n```","params":[{"name":"action","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","source":{"line":118,"path":"moonwave/SignalService.lua"}},{"name":"onDispatch","desc":"Similar to [`Rodux.createReducer()`](https://roblox.github.io/rodux/api-reference/#roduxcreatereducer)\\n```lua\\nSignal:onDispatch({\\n    NEW_DISPATCH = function(action)\\n        print(action.string) -- This is a dispatch running\\n    end\\n})\\n\\nSignal:Dispatch({\\n    type = \\"NEW_DISPATCH\\", -- the type field is required for dispatching\\n    string = \\"This is a dispatch running\\"\\n})\\n```","params":[{"name":"dispatchHandlers","desc":"","lua_type":"table"}],"returns":[],"function_type":"method","source":{"line":137,"path":"moonwave/SignalService.lua"}},{"name":"DisconnectAll","desc":"Runs `<Connection>:Disconnect()` on every connection that is in the signal\\n```lua\\nlocal Connection1 = Signal:Connect(function() end)\\nlocal Connection2 = Signal:Connect(function() end)\\nSignal:DisconnectAll()\\n\\nprint(Connection1.Connected, Connection2.Connected) -- false false\\n```","params":[],"returns":[],"function_type":"method","source":{"line":149,"path":"moonwave/SignalService.lua"}}],"properties":[],"types":[],"name":"Signal","desc":"","source":{"line":36,"path":"moonwave/SignalService.lua"}}')}}]);