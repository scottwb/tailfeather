require 'rubygems'
require 'rake'

begin
  require 'jeweler'
  Jeweler::Tasks.new do |gem|
    gem.name = "tailfeather"
    gem.summary = %Q{Remotely watch log files in a web front-end via WebSockets.}
    gem.description = %Q{Remotely watch log files in a web front-end via WebSockets.}
    gem.email = "scottwb@gmail.com"
    gem.homepage = "http://github.com/scottwb/tailfeather"
    gem.authors = ["Scott W. Bradley"]
    gem.add_dependency "eventmachine", ">= 0.12.10"
    gem.add_dependency "eventmachine-tail", ">= 0.4.20100903005209"
    gem.add_dependency "em-websocket", ">= 0.1.4"
    gem.add_dependency "sinatra", ">= 1.0"
    gem.add_dependency "thin", ">= 1.2.7"
    gem.add_dependency "json", ">= 1.4.3"
    gem.add_dependency "haml", ">= 2.0.13"
    gem.add_development_dependency "rspec", ">= 1.2.9"
    # gem is a Gem::Specification... see http://www.rubygems.org/read/chapter/20 for additional settings
  end
  Jeweler::GemcutterTasks.new
rescue LoadError
  puts "Jeweler (or a dependency) not available. Install it with: gem install jeweler"
end

require 'spec/rake/spectask'
Spec::Rake::SpecTask.new(:spec) do |spec|
  spec.libs << 'lib' << 'spec'
  spec.spec_files = FileList['spec/**/*_spec.rb']
end

Spec::Rake::SpecTask.new(:rcov) do |spec|
  spec.libs << 'lib' << 'spec'
  spec.pattern = 'spec/**/*_spec.rb'
  spec.rcov = true
end

task :spec => :check_dependencies

task :default => :spec

require 'rake/rdoctask'
Rake::RDocTask.new do |rdoc|
  version = File.exist?('VERSION') ? File.read('VERSION') : ""

  rdoc.rdoc_dir = 'rdoc'
  rdoc.title = "tailfeather #{version}"
  rdoc.rdoc_files.include('README*')
  rdoc.rdoc_files.include('CHANGES*')
  rdoc.rdoc_files.include('LICENSE*')
  rdoc.rdoc_files.include('bin/**/*.rb')
  rdoc.rdoc_files.include('lib/**/*.rb')
end
