import React from 'react';

const Home = () => {
    return (
        <>
            {/* About Me Section */}
            <section id="about" className="py-5 text-center">
                <div className="container">
                    <h1 className="mb-3">Nguyên Đức</h1>
                    <p>Ngày sinh: 6 tháng 1 năm 2003</p>
                    <p>Nơi sinh sống: Huế, Việt Nam</p>
                </div>
            </section>

            {/* Project Section */}
            <section id="project" className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="mb-4">Dự án: Quản lý người dùng</h2>
                    <p>Công nghệ sử dụng: HTML/CSS, ReactJs, Bootstrap</p>
                </div>
            </section>

            {/* Technologies Section */}
            <section id="technologies" className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Các công nghệ đã và đang học</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">C# .NET</li>
                        <li className="list-group-item">SQL Server</li>
                        <li className="list-group-item">ReactJs</li>
                        <li className="list-group-item">Flutter</li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-3 bg-dark text-white text-center">
                <p>&copy; 2024 Nguyên Đức. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Home;
