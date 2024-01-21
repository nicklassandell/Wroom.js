const carImg = {
    left: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAEoUlEQVR42q2WW0zbVRzH65gmJk5j4ovGW2Ligw8+jAcT7uE67tCsd1gvZJO5TFBGljmQcJNJoS0wVEBkMBiXAqMtFEopvXEft0Jh0ye3ZGwk88VEzIzh6+9UMALluv2TT/79n3N+5/P7nXOSHg7nCE8Hj+dDvLwfeSEhxznP8ymzrLzX1DZZOaJIc45IJHvSUqmtyetwv/vM0jyr9bhmeCVKY3809dNt1/po2jmMpabuSeMPhvVC/bItr8t18sjikt77r6usKznltkdPKhyraNAt4iDypppeFBuWUaRz38vXLcbyOjp8DlYph3NsVih8a7C0PlJjeaBX2x/+pSHxoeX6ZUrgLgp17tWiLtdnxot5bzu43DfpTLy0RTghkbw6I5X6zslkZ2fl8ltzcvnSSK5yrXroATSOxx6xZkM+chg5UUSUtk79YbqQfdchkcw4BIKTnGmR6I1puTyZhOpZmWyMpE9Iuj6vUIAxmqtEtYXk9sf/Qkk06BYOV7lHvoTytkmYL1yCQyxes4pEAZxpqVRCwr83ZdvZKV9Fvd4N68XLsJ3PhD09AyNSOUZTUnZwo9boWfLNypl8kOT2TTlVq9hN7E2usj5EKU2kbnZCfdOJikYbDJk5GBIKd9D9VSlU7VNb5KajypXm++zgIL9r/j8KtTO4nZWPQYHAK7ov83C9ye5J4FCVz23Ir5t/RYnxFxR0L2wRH0TO6Ev/ArW1/VC1jm/d873kMzIZHJlXcOM7HeqqunZS2YUfK7QwnM/aU87ol59Da3EtzOmZ3iung4c7JGQn1SYWw0L7tt+kh0IoglkkxoBAsGbm8QI4E2fOKAg4JRIMi6jzOQpNu7QP8Plr/Uxu4vMV2zuNRDfRyQ4MG3wEqWEjnmHg87ck4lXOJA3EFR4PacnJSElMxKf0LqLvdjYBsZ9UT6iJjNOnIU1KgpTmyORyUUWxhu3ySpJX0lJXEMWEiGSRkZEICQlBcHCw5x0VFYWzNEEZBbJxVV7YnOMySeJjYxEWFuaJZ4SGhiI+JgZXqQjPONpzDZMLhUKFmA6XiPabR50sKOtSNnr0vRiy2NDUfAspKamIiIjw9LNxbLw3WF98fDxiSKTWVGDANIR+kxnlKjVOnYr2tAuoAHL+TnyyRR4XFweFIg2j45MYn5xBn9GMOZcb3T16z2ok0TIK2ep4SYC18alqlqSyTAXX4jKGhh2wDDvhWljCNyXXEB4ezgp4SnMo6f0Kk79PgUkUmESdjVdzcuFe/hk3W7QUoIHZYsfYxBQEQuEaZZ7NxjFYzP9hbVwuV0DbdK+zuwfTsy6oNN9DXVGDmbkFNLe0si10JyYmxiQkJJzY8R8eEBAQJ5XJ/3SOjmPyziwGh2yeyrWd3ayi5aCgoHf2uQa8QGPqSpVlmKdqrfZROEcmPL/zCwoRGBhYuWukv7//CQqu/jwj82lbuxbGgUHU1tXTkop/o8REbPL9LiEk+Dg6Ombu2rfKdUOvETpDHwoKi9bp0E5R30d7Bvv6+r5Gg2R0SrWUiIWooe8wan/xoNcuSvRDiv+aYk3EAJHj5+f3wWGubqxKn2e8dx7bwOvzD+xde+jcC6+HAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC',
    bottomLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAE4ElEQVR42r2Xa0xbZRjHicTovixmy+IXEvlATAQBy4AGWgqlMFpgC9AWSi/QG9dN2BDCSKSFgQPEljtt6QYkm2Z+MBKdiIThoICWMQwKJH5Vw8a+mDWDuEt8fN7TC6ddqSDISX55D1D6/53/ed5DCQo64DGVm3tyXCB4Leioj+9lspB5ubzGJpfb52SyT+ekUu6RiNCCf56Ty18sKBRAwPM/XSJ5Nqm0yiaRMC2nT7/6vwf7gq95Po+rTSbbnJXJTNOHITI0s5k4Njr1092q+l2Dd5E5uEi/3XHSbHdMDi09gRvTv8Ft6zcwW30Z9iOCjcFUfv7m3cJC075ujV6vf8V8z1FvXtp6Zrm/DRRE5M7eREgDkwUFcCM7G/rT0uDWuXNwp7CQamRPIgOLjsRBu2PDsrSF4VtOAde608j4SyLzRUUwKSmkgru4XPg4OZmiE7FmZMC4WAxfCYWb1vT0zF3DjQuPT5gWHRNUuFvAc74N/hqZqW6A26XVYKxtg448mSfYFyNKGVJSoIPNVvifeKXy9cnhSd2o7cEzrB/cuEU85/Rm7j0Bw805qNSZQKkzQ7Oo2L8Ah+MEz/0K/CiTHV/TaK7+UlK2taQ3wMRnNhi1PQIzBtBlzF63ZRu6Zx5CueFzKGoa2lWgA4PpXPUVWFapTq1qtVbk6VpJCVCUloNTZNYp4kdi0P4Y6oanqfBivQUqazuh9azI+2pxbUM+coWTcx1dYFmjeQuDv0BeeMKRdde6WloGXo0s7TTSMrYKqivXoKLOAB8qLkBbRrbXlbYjdYgUESKliAJnIDM52Smwola/u6rRTK9ptX+vu0LXaRJ03CLfEpG5R9Az8wBqWoc9wb51k/AqhJeUBEwmE2JiYqiVw+E4kNSgHxSKd1Y0mmV6sC9rfqSIyEJjJ/TVtXsFu2t3CzQgGfh9FpsNGm0J1HxQC1xuKiQmJt5KSEg4FoT7UTglkcBicTFg/QEl6NxXKuFmdvauW60NaUBEJJzFguqLl2Bg0ALW6yNQXlEJUVFREqr+L3NyhCgBXyN7ESHY8TUjAsHOkNGu2h1chPc4HdckrF6QmQkGYzdcvFQPnxh7oKLy/FZ4eDibEjBgAyMiEYyhwF5EyF+6IXyaUdsIaXatZKrdwWfwQcNFkvFrrBmkUhn0DZig/nIjdHX3glAsXgwLCztFCWC+UIGPRh0SSITUPiOVwgA+08lg1SMSJAuvkEy3nAQjKYgr/Hes/lcycDk5uWAyD4HJYoXzF97fZjAYas/2IwL5+flACCQygT/vSU2lrryWDBZC3hzfDGJjY8lUU+EkGFcshBMZHx//dlxcXA+DEbMhEokBccTGxzeFhIQc8wjk5eWFiMXiLmQjkMh1Pp+6z3rkrGuw1GotNDW34O8UEJmHGEoF49sG055vwXi/34uMjCzDNRWrf/ljG4YHYxGMQCImFCD3WOIaLJVaA339g1itFZqvtAAGGH2C938EElHhJJ9xVgxs3NNtHZ3UUOmbWqFR10QEyg7t858/kaysLGq4SDifL4Ce3n7QYXhXdx8oVeo/sN6IQ/8ETBfh8/krGP4dbqu/WCw2tGMDZpxqfLI9ZzITmg9c/7+J8Hi8N3HQjuNkF0VHR9t4vLSnuL3IVPeGhoa+caT/lGDdJxB+REQEy2tL/YfjHw4tB85yIgWmAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC',
    bottom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAACJElEQVR42mNgAIJ6Bgam3aGh/FuiogRJwRv9/HiB2hlBZjDsDQ2VPhgZufFQVNQZUvDBqKg52zw92cGGHI6KUjoSE3P3WGzsf1Lwkejow6tCQzkHkSHGxsas3V5e/geio5+Rasj+6OjLSQ4OJgw2NjaCiUFRZ9Z3zf+/c+IK4vGE5f+XNU//7+XivgZsSGR2zZkpR9/8n3PhFwaefeEnECPzEeze3Q/+ewZGrAIbEpVdCzZkNlQRuiZkMWQ22JAgqCEgl0w++hpuK4ieg6YR3YA5F9FcEpZVdWbyEZghePD5Hyj8nl33/7v5ha5i0NXVFQzJqEQYAlQ4C6QYSs869x2CYXwk+Z5d9/47ewWvBhsSnlhwZtaWa/8X7Xv0f9Geh/8X7cWFH6HgyatO/3fx9FvDICMjw1nq7lO2IyX73f70vP8gvA8LhonvReJvSkp7FGhnF81gbm7Ol+7ktGpTSMiP3RER/0nBq4OCPnvb2XWDAzbZ1fXMhtDQ/7vCw0nCK4KD//s6Oq4GG5Li7k62If6urqsoN8TZGZpOgN7pCgv7PykyEgNPxiIGwy0hIf/dHBwghjg5OZ0JBbokAhhYpOCgoKD/tra2EEPs7OzOuLu7//fw8HgYEBDQ6e/v3+Xn59cDpHtBfHQMlJsCVPvGzc3tP1D/KgZ1dXVeCwuLOcCoPgzE/QxEAGAZJAJUuxiqpwkkxqiiosIOSnRaWlpsDMQBFD0Axy9RjVLSSCIAAAAtdEVYdFNvZnR3YXJlAGJ5LmJsb29kZHkuY3J5cHRvLmltYWdlLlBORzI0RW5jb2RlcqgGf+4AAAAASUVORK5CYII=',
    bottomRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAEwElEQVR42r2VXUxbZRjH69S4GfVGbzTGxIwLA4GEECAFtHwMKAMKbSmjnAIHykc3NvDjYsbB2PjoWGlxVAgBGZSPhqUlQgdCaenXWkBY68XkRlEZi/HKZMk2SUiQx+ccaHeopYIB3+Sftzmn6e/3Pu/zvmWx/sPQiUQvOgoKIl0SSaOrsFDg4vFeZx3naGCxTjhEovfvSSRv74K/wvy+UFQE8xLJhpMgjMciQoFtYvEH9whCjsBVnFe8YP8cqQgTjFlzEcR2IOh+Irbznxm1t41J/yuYilNWA5PKQegb84DK9OsPN4w/hxwabC8sXDPl529bCgoAy31wcNsOuN38EJRzj6DNvL7dZnrY1TCwdjJ4R7PZp6xi8RVqxThvT4tEcFcopPMtfg4m8hzs9oGVc+u78yNQzK49xZwLKjDB470zKRSuGPPzYTIvzwdnhhKZuCwH24VP95ZazwQHDgo8UEyvng4qMC4QrAQCM6PqNIDithkG1WN+Kw6UdV8lqK3omPpRbSMbTv6rgCGIgLLLAFe0i1A3ugQ3pn8KumqvhHpmFe4MWsBap/hzuVR6PeDxHGUKCAR0Agnc6hhDgQVaokHnAYVpbd+V02CNBez1KrhfXgkekgQ3SW4uk2S3Wyx+a4/ARRS4iT2gQUgHRoECg5gJPwF9RS30tHwNTf0WWqLJsPIPAS/YRoGlFRQUPKWlvtwnya2lkhK9u6joPZ8An89/My8vz00gJPvsWUhNTYVzOKv4fBj3q4YBm1Rf+TEt0qyxQevuVnhL7V2xe2fFOwJ+EvhsGythWS4pCfM6vCAUCq9yudy/CEICVVUySDlzBnLS00GNEgG3BEV0KNLXNgKj/aYdsLTyOdAP6p/vd0Q8S8XFbNogIyPjtEAg/OXu5DQ45xehu6eXrgSJldBQfbFfc6KICe8JLOuBwIytALxzYCgzc4IWCA0Nfa2ySrYwZ7HDsFYHs2YrXP78C0hMTAQSqyBHkDbIKZnFO+S74uIDg0eysqA9KQlaORyzbxtycvjdE4Yp6OnVwB3dOPQPDAKbzYYs/DL2CEjxMmphiBgYp4b6PIPvF/GSOghYweHATcw1hgArPj7+wxZ56x9WuxNcC0swNKyFmJgYSElJ2cIe2RQhgIpXpAeh1zDN3lODoW5M/DdkNlxAcD2mHKubyRTA8VIal1t3vVG+MaIdhUs1tRAZGfkYt6c7B8uDEnqsxBOviDA3F9LS0ihBEGOvdOJWURJTKOcgiKDgDHyWhMEt3iPAioqKehXLXobVMMbFxQ2EhYUlhYSEvEK9w+enUCKdEhEIBE/S8ZTU1n4C1Rcv0RIiLhf6drfjG5RR47P9wLvwxzjLA17PKPIyTicCvaNE8MiSF6prnlFb5XQtglLVTjdsdXY2jFCXFlZHhZD9wBwOR4vxLe7QIzY2NrSu/upvdsc89PYNgXF2Dsqk5XQlylCgHisgS04+erB30MdWdt4yYzTDLXUPGE1WwAaGhIQEwO2hQ8kcOZg58AeLOru6NxzOBVha9kBjUzNER0cD9sYzvN6fJicnHw+Y2bBZPJ6yqVm++WWHGnL5/K3w8PAHERERUrw7UlDgo2MB+/XCG3haKvDUDGNzViPw3cP+xt+7PiWCW7gDhAAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg==',
    right: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAXCAYAAADz/ZRUAAAEeklEQVR42q2Wa0xbZRjHi0YTZ/SDCZ+N88s+YRxfuYWb3IWud3pOW0AuceHDthhNlnCTSxltp0y2wSwbpHQrRcalN9pCR8d1tKwDpRhYjIDG6Bf9oCZb9vg8h8K41tZ5kn968p7n//897/ue5j083jGX0GR62aB3fuAtKa+dksvD6o62T/HJUPAN3v9xaU0br2nGt6r1Zv+v90vLYZphwupml+3vJkuwr2l49dSLge0bb2ncGxqte+tP/WAAIoH3dtmg2fo9NI4El5tGVgQ1puVXowZfcvzwjsa92a+d2Hqi8/wE0cJJTcMrv2MTrTeuWN6u4fFeCgucFApjvXJ5i0dVpu+4G1jUjG8+QzjswkuigzdbsIHR1acjn18LTrNszwzLls3I5afvFxQcfie8MtlJb3Hx+j1VGXSaHgAuOWzDf44OblnlwDuyNXwF8woFzLHsM9Rvsyw7NccwWvz9cEosfvd6fPwrHHwS4R5lKXT274VHuex7wNvwDphD+PwBYSNPUI9nGebjw/DxTQ5+GWXQj8GEnAWPTLZPrtIq6NMYoKfdzOlL48zzmVvDw3ebYBg1z7mz7Moy6DL7QIvwL1w/grFjCOyqChgTiw9ptPIctBqmoG7g4a4a7i7hXgdD8NXI4ZM78P4FaLevgVndDQ654kjwcXBS/TePoHH4u8jhe1+43m4XDNa2w5hUdiyYZCmvhitddmjrnQRNSM/vvaDDbXBcbItg5nz+SbdEsu6WFYP9o7NhobvC5qy475ays5ysIe29dzJKmJBKAScGM/hSzh0FH0W4TSRajwj6H+VEubGRe/iy4lkA+Hejho6HO1D2F4Q6Qjo47pJISNp9cCocQOlQF4VC+FQggEaRCG6hrBECbageFPk+wwzK0eG9+UAjdpFIzTMg/DbC7+BAF6rizBnIzs6G9PR0SEtLg4yMDBAUFEAzBhjxOdWZsPOjdJugKHFhIWRmZnJ+UlZWFpQWFcG1PX7MUvNkCGek0nUF7okYuyQYw7Cg1V2GjqvX4dz5C1xAfl4eMGiiOgXu3SHhOD0vwEapcfKRn3IoLzU1FQR8PrCUgfXIVPNwlm9KpdKbEonkaU5ODiiVKhj3eGExsAwPfAHw+QPQom7dNuM2YC3I0HxQNC7C1SFwc0sr+BYDsIB+yhn3TIJKVcKtANVQrZTg3FcLnmw4WIPGNep06dsgdN8ygkZ3FaZnF8A+5oKUlJQ/ioqKjNhkJxoPicb5fL6R6hxON+fTop9ylpZX4FKbllZwDSfQGcoo3HfCJSYmNtbVN8AjLB4ZdYChzwz+xSUwDwxCcnKyH5/Hhjue6TnW+QYGh8D/cAkMRjMMYw7l1dbVU0bdseakpKT38/LzH9/4uhtm5xZgfmERLDYHlFdU/oXGaiyJ+ZfvkRjMOE/1FquD81MO5VEuNnc6rBkLknF/LQpFyUZlZdUvubm5fgysiIuLez2Sr6H4+PgT2GhVbm6erwL9lEN5lBtB89sBuHenEhIS3gstdUyUX2Q0iVjyUw7lHVX0D1zEbglV2iddAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC',
    topRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAE2ElEQVR42r2Wa0xbZRjH0UXNomaTxA9LSCSRZOHuApRrC2WlUAqsF1ra0wJy0QmFlZsxjFthIQawXHtlQYeIU4KL6OS2jcu4ZAM/LJkfzDTG+IGoH9wozDGcPj7v4bScQplkczvJP+9pe3L+v+f/PO/p8fLa5zEqEr0wT1H8eY2melalOjakUBzwehqH03hBozk/r9XeXszOBlxXUD1zFBU2LpMdmVIojl6hKM4URSXPqNV5sxSlv/S4kJ6Md2pOq/31qkZzc5qifplWq1dx/Rs/AxGeryBIzyOlNTS48MZMyXt7GnsSXksbzzIAjwzSvrjqbVu8feXT8R9grOszmC/Sw34hFnaAsLVfkGfMS2t66/L6pu3bu9C75AACMt79+b5BZvIKYbC0BmxljfBNfhHMsCD+MxHLsuOodWntFjFnywnysETIzYdz3oL66k7Ia7BDjqEX9LVmMJWfgdHcQpjMyoIxpRIuZmbCBakUBsTiFUtSktZl3jD03fNobsbq/3EHWN8FMt61nQgx/lImA7tQCI1ZBbSxUwUIUKlrgLYTSuhKTARjQgK0xsdDK49Hq4XLrXYBmK7dSbJed/xBGy6vM8bOcw+JjN2C4aoztHEbuSnKoMx3GVegcZNMCy0JiVtmHtRMACaEwhevUpTqonHgRv/Ej2C9dgesy2u0aHMXzDaAHWW59DO05ei2K8KVGLKN2WYNqFKUDlVLVrxeFR9f7fW1RMKZyMxcnaEomC6ugBHTF9A/zgJZYmDYENdXoaO5b8ucJdqUVOz8jjGvQom5XIiOjoaoqCgQ4HkCtiOeAOBAxI3IZH+S4SCDwgY5h/12grDTMF24Aa0Zil0ALhBW5dWoFBQxF4vTIFUshvDwCGK+wePx3nYBfCWXAxEBmWBAplwgTCKYhmX+dzBWve9WpRsAy7wRpUTFxsbCO0XFYLbYoKvbRCAcmERRWFjYoV0AbJBJN5BhOpFu+yi0CoQPNW/C8xLUCRQP45ZIpNDR2Q21dU0IYQeNNvunoKCg1+nptyPAIAKM7ABwSwT372WVCj7JPQkfSFS7Km1hG2NvJSj+Vo/p6EtKT0FLWzuc0r8LxvZObEX6pI+Pz0EaQCqVRhfI5evNaDSIhnuBDKalufXYgDqJymOGjFRMG/P5tNB8My4u7q+IiAjQl5VD79kPwWS2QVl5xb3Q0NBs1/4XCASHJBJJB4LcK1AoYC+QAQLAGqx0Zqo5HA5wscdkqhltoKZQmfibITw8fCVFlAp19QbQlZRucrlcS0BAwEtuj2AckpeR+pxIJLovw6eaJxAC4KxcwkSbnpEBKjVFby288QZWTYxVqMPMrQ9gtceCg4ONqMvY90pfX9/DHv+F8IJXkDgXbzyXkpLyG4LcZYN8jACkxzkoNIPc3Dehx2SBs30fQX5BIWDU9SzjXX9yqOf29S6Aw+EdGBgYihCp2JphuVzuICBl6el0j8lgHT8ugNY2I5yuNUBntxmHTL+JsSb+769jmMZBsVicTEBwdZAex8TEgBpj76KNK3F79ZBt9b2/v/9rT+y9kIAkJyfjA413kwydMkuFU90HFlsvnK6pe4AzUIOXPfvEX1AjIyOTsNdzuN4v1pVAUbHuQQKfP+zn5/eq19M6sNfeISEhOTjR/Ti4FY9r/i8npLTVUhwSmgAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg==',
    top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAYCAYAAAAcYhYyAAAB9klEQVR42mNgAIKDERGyRyIjtUnBB8PDNTf5+HAxwMCRmJjZR2NinpKCgXruHYyKMoMbAhRccyw29j8pGKjn2+HISJtBaMiOvmVrdk5c8R+Ed01c/h/Gxoe3T1j+bXvPMoQhs85/XzPn4q//pGCgnm8zz3yDGGJubq436fDL4zg1XIBiDEN+/KyYu6cYqJ+PwdbWtq9t01WsCjHEkPizzn3/n1g14am1tbU2g5OTU187miGzL/wE80H0bDCN5KILCEOSayY+dXR0RDUEpng2HP9EwwgLwIbUTkIYMmverv+btl3/v2krPnwNwQaq3bD5yv/c/AaIIfb29n07oqP/X09LI4xTUyEYyL4CpOu8vSFhAiTAhtwAStzAovEGuiFQNtgQDw+IIZaWliiGEIuvQg0xNTXVBqUTr0NxcddvINlMDAa65PdUX98+PT09MQYbG5vqXdHRX0h1yZWUlH9N3t7ngY5QBcfO9pgYsPNIwZdSUv7X+/hAYsfFxaVvSUjI/wNRUSThvZGR/0uBsQM3ZGFQ0P9d4eEk4R1AXAQMWLAhQKKvC2jI3IgInHgeFrHZQJzs5gYxBJQBg4CGRAGdSAqOBHrH1dUVkdjINQQYFBBDLCwsEry8vNb4+/svDwsLa4qIiKgkhIGWzggICFgDzDIzgYlNFgC8lcBeEmWamAAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg==',
    topLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAYAAABQDyyRAAAE2klEQVR42r2Wa0ybVRzGO52XmJgsMcYvfiALEiAh4RLGnXIptzEotIVCW2AwLoPMSQCrYy5sbFBpuY+BsIAwVt0cDMpltIxSCoWhsg8uMZPAgPjNaWZMTJwJ9vF/KiUvN2WMeZInpzlN/s/vPOd/3vfl8fZvHDAlJBwq4/Fe4u33YEUHjh17Y4fiB0wKheO0QnHeolDMWuTySlNqqvO+gLAirNhEamqlWSazTMhkelIHrV2kOX9CLk8kwwtkvkCyzqSlgc1Tcvnyc4Fwjclomcytk3I5zGtiv2m3mCbDmR20J5D9MN6sqcwc62B503LzV3OyXRuTrGaO8VjOKUwez3omY0tWLvTnG9F1fRJ1Iwv4VP/oe9XQ/OEt5kMi0eFxzo65xqMnC9GtaofmqgGtjb0YVlbAQiDPYqwZXbFJbVi2klRlZaaDGwB0YrFqSCKx3klKgj45GaNSqU23i8uhadPjrHaGdM+mS5+boCv4EAS6JY114+6NxprRZQ7E0mO1filoA0C/SFQ7IBaDK4JCnywd15Qq1DT141y3xQZQ1jWJmwUfYZD+NxAsA7Fk5WzYsZpjuG5Ma3ZV6Rd1Vbof3lwH6CSAXmYqEqGH5ts069YgGEw/B6ScEmAA9v8YSG9pNeqH5//VdF0GAhhZ/KNZO53b6uX1ig1AJpHUllD8FVTsNJkXJiSggWYGwk2FJaItKkdvRt6G9f60E2jRWrbGzTGl6KHWL+JKz330aq7BmF/0CyXY2BET8zZPQgBJBBAXF4ewsDCEhIQgNjISKgKxpzHwH7p5Ro1aSmHjbpdQxYxHFtFExj3qLowVFGMsJQU34uPRFB7+RBUY6MUAkoRC4cO4uHhrXX0jNNW1BBOP2IgINCYm7gpAl5yC9rY7tgTs5puN79qNBQKo+XxUBQf/A8Ce5eHh4RFKpfK32a/nYJ6aQXtHJ2gN6UePopmd8y4geguUaOj7jqJ+ZIt6J2O7uAA8Hx+f90rPnlsZM5pRXXsF+lEj3j/9AUJDQyGl4iUSCVpI24FwG1Z7qRU9mi4YuVFvMt4WwNXV9VVFesatwWE9Ojq1MJomUamqgr+/PxKoF1iPpJJYs9pB+qg/vmQ3Z1OfsOfJLaFwZ2PSBVI+n/9EZgdgw8/PL7z8YsXPJvMUZr+5jzOln8DT05Ol8KNYLJ4niL/sIMUE8TGZZZLRKWZGEH0ciM+oiXc0piYXkvh8/nxgYKAT95l0kBbz807m/1RUXAKBQPCrm5ub1snJyZtScCAIOgnJQwZCM6KiolgRm4T0u4Yatn8bgG2MQZtd8fX1FfC2eUO+TLF7kzKPHDkS5Ojo+Br3w8MOQld24UR2Nrqvf4HqmjpEx8RAEh2NjrXjYADbGVPdVXd39wcuLi5SVm/Pn15BQUH5zS2tmLn3LUwTFtQ3XLYZ5FHTtRBANQHYjUP4/KcBAQEztGMdHWkBberd5/5SooIRDY1Nf/bphtFwuQ3DIwZIpSmIJOMUOh4RHQkzpjMepxuWQrs+tK/fiFT0ncLCojkDXdeu7hsYn5iyXdvg4GB2a57SM+TFGHMHPbIzaurqfzdPTsNw1wiFIg0eHh6rlE7LCzW2DwcHh9fpiiqzc3IfZxzPXPX29n7g7OxcRHqL938NL3qlUnN5UnfHUuR7aq6/ATDY0AViBMY+AAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC',
};

const carImgSize: number = 25;
let currCarImgSize: CarImgSize | null = null;

const turboMaxVelocity: number = 40;
const maxVelocity: number = 10;
const step: number = .3;
const turboStep: number = step * 5;
const resistance: number = .8;

let turboEnabled = false;

let px = window.innerWidth / 2;
let py = window.innerHeight / 2;

let vx = 0;
let vy = -maxVelocity * 3;

let el: HTMLImageElement | null;

let arrowUp: boolean = false;
let arrowDown: boolean = false;
let arrowLeft: boolean = false;
let arrowRight: boolean = false;

let activeClickable: HTMLElement | null = null;

const clickableNodeNames = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'];
const highlightClass: string = 'wroom-wroom-highlight';

function frame() {
    const computedMaxVelocity = turboEnabled ? turboMaxVelocity : maxVelocity;
    const computedStep = turboEnabled ? turboStep : step;

    // y axis acceleration
    const yAbsVel: number = Math.abs(vy);
    if (arrowUp && yAbsVel <= computedMaxVelocity) {
        vy -= computedStep;
    } else if (arrowDown && yAbsVel <= computedMaxVelocity) {
        vy += computedStep;
    } else {
        vy = vy * resistance;
    }

    // x axis acceleration
    const xAbsVel: number = Math.abs(vx);
    if (arrowLeft && xAbsVel <= computedMaxVelocity) {
        vx -= computedStep;
    } else if (arrowRight && xAbsVel <= computedMaxVelocity) {
        vx += computedStep;
    } else {
        vx = vx * resistance;
    }

    py = py + vy;
    px = px + vx;

    // x-asis edge wrap-around
    if (vx > 0 && px > window.innerWidth - carImgSize - 5) {
        px = 0;
    } else if (vx < 0 && px < 0) {
        px = window.innerWidth - carImgSize - 5;
    }

    // scroll up/down
    if (vy > 0 && py > window.innerHeight + window.scrollY) {
        window.scroll({
            top: window.scrollY + window.innerHeight,
        })
    } else if (vy < 0 && window.scrollY > py) {
        window.scroll({
            top: window.scrollY - window.innerHeight,
        })
    }

    drawCar();

    setTimeout(() => {
        requestAnimationFrame(frame);
    }, 1000 / 60);
}

function pickCarImg(): CarImgSize {
    // Calculate the magnitude of the velocity vector
    const velocityMagnitude = Math.sqrt(vx * vx + vy * vy);

    // Normalize the velocity components to get a unit vector
    const normalizedVx = vx / velocityMagnitude;
    const normalizedVy = vy / velocityMagnitude;

    // Calculate the angle in radians
    const angle = Math.atan2(normalizedVy, normalizedVx);

    // Convert the angle to degrees for simplicity
    const angleInDegrees = (angle * 180) / Math.PI;

    if (angleInDegrees >= -22.5 && angleInDegrees < 22.5) {
        return <CarImgSize>{
            name: 'right',
            src: carImg.right,
        };
    } else if (angleInDegrees >= 22.5 && angleInDegrees < 67.5) {
        return <CarImgSize>{
            name: 'bottomRight',
            src: carImg.bottomRight,
        };
    } else if (angleInDegrees >= 67.5 && angleInDegrees < 112.5) {
        return <CarImgSize>{
            name: 'bottom',
            src: carImg.bottom,
        };
    } else if (angleInDegrees >= 112.5 && angleInDegrees < 157.5) {
        return <CarImgSize>{
            name: 'bottomLeft',
            src: carImg.bottomLeft,
        };
    } else if (angleInDegrees >= 157.5 || angleInDegrees < -157.5) {
        return <CarImgSize>{
            name: 'left',
            src: carImg.left,
        };
    } else if (angleInDegrees >= -157.5 && angleInDegrees < -112.5) {
        return <CarImgSize>{
            name: 'topLeft',
            src: carImg.topLeft,
        };
    } else if (angleInDegrees >= -112.5 && angleInDegrees < -67.5) {
        return <CarImgSize>{
            name: 'top',
            src: carImg.top,
        };
    } else if (angleInDegrees >= -67.5 && angleInDegrees < -22.5) {
        return <CarImgSize>{
            name: 'topRight',
            src: carImg.topRight,
        };
    } else {
        return <CarImgSize>{
            name: 'bottom',
            src: carImg.bottom,
        };
    }
}

function drawCar() {
    if (!el) return;
    const pxOffset = px - (carImgSize / 2);
    const pyOffset = py - (carImgSize / 2);
    el.style.transform = `translateX(${pxOffset}px) translateY(${pyOffset}px)`;
    el.style.height = `${carImgSize}px`;
    el.style.width = `${carImgSize}px`;

    // only update src if necessary
    const carImg = pickCarImg();
    if (carImg.name !== currCarImgSize?.name) {
        el.src = carImg.src;
    }
}

function isEditableElement(el: HTMLElement) {
    if (el instanceof HTMLElement && el.isContentEditable) return true;
    if (el instanceof HTMLInputElement) {
        if (/|text|email|number|password|search|tel|url/.test(el.type || '')) {
            return !(el.disabled || el.readOnly);
        }
    }
    if (el instanceof HTMLTextAreaElement) return !(el.disabled || el.readOnly);
    return false;
}

function startWatchingCarPosition() {
    setInterval(() => {
        const els = document.elementsFromPoint(px - window.scrollX, py - window.scrollY);
        const clickables = els.filter((el) => clickableNodeNames.includes(el.nodeName));
        if (clickables.length) {
            const first = clickables[0] as HTMLElement;

            // if activeClickable exists but is a different node
            if (activeClickable && !first.isSameNode(activeClickable)) {
                activeClickable.classList.remove(highlightClass)
            }

            first.classList.add('wroom-wroom-highlight');
            activeClickable = first;
        } else if (activeClickable) {
            activeClickable.classList.remove(highlightClass)
            activeClickable = null;
        }
    }, 100)
}

function setupEventListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            arrowUp = true;
            arrowDown = false;
            e.preventDefault();
            e.stopPropagation();
        } else if (e.key === 'ArrowDown') {
            arrowDown = true;
            arrowUp = false;
            e.preventDefault();
            e.stopPropagation();
        } else if (e.key === 'ArrowLeft') {
            arrowLeft = true;
            arrowRight = false;
            e.preventDefault();
            e.stopPropagation();
        } else if (e.key === 'ArrowRight') {
            arrowRight = true;
            arrowLeft = false;
            e.preventDefault();
            e.stopPropagation();
        } else if (e.key === 'Shift') {
            turboEnabled = true;
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowUp') {
            arrowUp = false;
        } else if (e.key === 'ArrowDown') {
            arrowDown = false;
        } else if (e.key === 'ArrowLeft') {
            arrowLeft = false;
        } else if (e.key === 'ArrowRight') {
            arrowRight = false;
        } else if (e.key === 'Shift') {
            turboEnabled = false;
        }
    })
    document.addEventListener('keypress', (e) => {
        if (e.code === 'Space') {
            const els = document.elementsFromPoint(px - window.scrollX, py - window.scrollY);
            if (els.length > 1) {
                els.shift(); // remove first item, it is the car itself
                const first = els[0] as HTMLInputElement;

                // if another input field is focused, remove focus
                if (document.activeElement && !document.activeElement.isSameNode(first) && isEditableElement((document.activeElement as HTMLElement))) {
                    (document.activeElement as HTMLInputElement).blur();
                }

                if (isEditableElement(first)) {
                    first.focus();
                } else {
                    e.preventDefault();
                    first.click();
                }
            }
        }
    })
}

function setupCarEl() {
    document.body.insertAdjacentHTML('beforeend', '<img src="" id="wroom-wroom" style="position: absolute; top: 0; left: 0; object-fit: scale-down; z-index: 100000000;" />')
    el = document.querySelector('#wroom-wroom') as HTMLImageElement;
}

function injectCss() {
    document.head.insertAdjacentHTML('beforeend', `<style>.${highlightClass} { outline: 2px solid orange; outline-offset: 1px; }</style>`)
}

function startRenderLoop() {
    requestAnimationFrame(frame);
}

function init() {
    setupCarEl();
    injectCss();
    drawCar();
    setupEventListeners();
    startRenderLoop();
    startWatchingCarPosition();
}

export default {
    init() {
        init();
    }
};
